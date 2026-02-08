const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();
const messaging = admin.messaging();

exports.onNewPost = functions.firestore
  .document('posts/{postId}')
  .onCreate(async (snap, context) => {
    const post = snap.data();
    const authorId = post.authorId;

    const followersSnapshot = await db
      .collection('follows')
      .where('followingId', '==', authorId)
      .get();

    const tokens = [];
    followersSnapshot.forEach(async (doc) => {
      const followerId = doc.data().followerId;
      const userDoc = await db.collection('users').doc(followerId).get();
      const fcmToken = userDoc.data()?.fcmToken;
      if (fcmToken) tokens.push(fcmToken);
    });

    if (tokens.length > 0) {
      const message = {
        notification: {
          title: `${post.authorName} publicou`,
          body: post.content.substring(0, 100) + '...'
        },
        data: {
          postId: context.params.postId,
          type: 'new_post'
        }
      };

      await messaging.sendMulticast({ tokens, ...message });
    }

    const hashtags = post.content.match(/#\w+/g) || [];
    for (const tag of hashtags) {
      await db.collection('trends').doc(tag).set({
        tag: tag,
        count: admin.firestore.FieldValue.increment(1),
        lastUsed: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    }
  });

exports.onAlertCreate = functions.firestore
  .document('alerts/{alertId}')
  .onCreate(async (snap, context) => {
    const alert = snap.data();

    const usersSnapshot = await db
      .collection('users')
      .where('location', '==', alert.location)
      .where('notificationsEnabled', '==', true)
      .get();

    const tokens = [];
    usersSnapshot.forEach(doc => {
      const token = doc.data().fcmToken;
      if (token) tokens.push(token);
    });

    if (tokens.length > 0) {
      await messaging.sendMulticast({
        tokens,
        notification: {
          title: `🚨 ALERTA: ${alert.title}`,
          body: alert.description
        },
        data: {
          alertId: context.params.alertId,
          type: 'alert',
          severity: alert.severity,
          location: alert.location
        },
        android: {
          priority: 'high',
          notification: {
            channelId: 'alerts',
            sound: 'alert_sound'
          }
        }
      });
    }
  });

exports.dailyPriceUpdate = functions.pubsub
  .schedule('0 6 * * *')
  .timeZone('Africa/Luanda')
  .onRun(async () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const salesSnapshot = await db
      .collection('products')
      .where('status', '==', 'sold')
      .where('soldAt', '>=', yesterday)
      .get();

    const prices = {};
    salesSnapshot.forEach(doc => {
      const data = doc.data();
      const key = `${data.category}_${data.location}`;
      if (!prices[key]) {
        prices[key] = { sum: 0, count: 0, product: data.category, location: data.location };
      }
      prices[key].sum += data.price;
      prices[key].count += 1;
    });

    for (const key in prices) {
      const avg = prices[key].sum / prices[key].count;
      await db.collection('price_history').add({
        product: prices[key].product,
        location: prices[key].location,
        averagePrice: avg,
        date: admin.firestore.FieldValue.serverTimestamp(),
        sampleSize: prices[key].count
      });
    }

    console.log(`Atualizadas ${Object.keys(prices).length} médias de preço`);
  });

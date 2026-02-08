const sendNotification = async (payload) => {
  return { delivered: true, payload };
};

module.exports = { sendNotification };

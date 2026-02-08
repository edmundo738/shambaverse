import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ProductCard = ({ product, onContact }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {product.image ? (
          <Image source={{ uri: product.image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.emoji}>{product.emoji || '🌾'}</Text>
          </View>
        )}
        {product.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{product.badge}</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.location}>
          <Icon name="map-marker-alt" size={12} color="#7d8590" />
          <Text style={styles.locationText}>{product.location}</Text>
        </View>

        <View style={styles.footer}>
          <View>
            <Text style={styles.price}>{product.price} Kz</Text>
            <Text style={styles.unit}>{product.unit}</Text>
          </View>

          <View style={styles.seller}>
            <View style={styles.sellerAvatar}>
              <Text>{product.sellerAvatar}</Text>
            </View>
            <Text style={styles.sellerName}>{product.seller}</Text>
          </View>
        </View>

        <Text style={styles.quantity}>{product.quantity}</Text>

        <TouchableOpacity style={styles.button} onPress={onContact}>
          <Text style={styles.buttonText}>Contactar Vendedor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    margin: 12,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  imageContainer: {
    position: 'relative',
    aspectRatio: 16 / 9,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#21262d',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  emoji: {
    fontSize: 64,
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#da3633',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  content: {
    padding: 16,
  },
  title: {
    color: '#e6edf3',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  locationText: {
    color: '#7d8590',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    color: '#3fb950',
    fontSize: 20,
    fontWeight: '700',
  },
  unit: {
    color: '#7d8590',
    fontSize: 12,
  },
  seller: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sellerAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#238636',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sellerName: {
    color: '#7d8590',
    fontSize: 14,
  },
  quantity: {
    color: '#7d8590',
    fontSize: 13,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#238636',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

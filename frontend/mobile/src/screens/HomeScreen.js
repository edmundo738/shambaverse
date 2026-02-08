import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed } from '../store/feedSlice';
import { PostCard } from '../components/PostCard';
import { ProductCard } from '../components/ProductCard';
import { TransportCard } from '../components/TransportCard';
import { AlertCard } from '../components/AlertCard';
import { Composer } from '../components/Composer';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.feed);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchFeed());
    setRefreshing(false);
  };

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'post':
        return (
          <PostCard
            post={item}
            onPress={() => navigation.navigate('PostDetail', { id: item.id })}
          />
        );
      case 'service':
        return <TransportCard service={item} />;
      case 'market':
        return <ProductCard product={item} />;
      case 'alert':
        return <AlertCard alert={item} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Composer />
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing || loading}
            onRefresh={onRefresh}
            tintColor="#238636"
          />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  separator: {
    height: 1,
    backgroundColor: '#30363d',
  },
});

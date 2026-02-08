import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed } from '../store/feedSlice';
import { PostCard } from '../components/PostCard';
import { ProductCard } from '../components/ProductCard';
import { TransportCard } from '../components/TransportCard';
import { AlertCard } from '../components/AlertCard';
import { Composer } from '../components/Composer';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.feed);

  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);

  return (
    <section style={styles.container}>
      <Composer />
      {loading && <p style={styles.loading}>Carregando feed...</p>}
      <div style={styles.grid}>
        {posts.map((item) => {
          switch (item.type) {
            case 'post':
              return <PostCard key={item.id} post={item} />;
            case 'market':
              return <ProductCard key={item.id} product={item} />;
            case 'service':
              return <TransportCard key={item.id} service={item} />;
            case 'alert':
              return <AlertCard key={item.id} alert={item} />;
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '1.5rem',
    backgroundColor: '#0d1117',
    minHeight: '100vh',
  },
  grid: {
    display: 'grid',
    gap: '1rem',
  },
  loading: {
    color: '#7d8590',
  },
};

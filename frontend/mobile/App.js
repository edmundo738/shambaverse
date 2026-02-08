import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { store } from './src/store';
import { useNetwork } from './src/hooks/useNetwork';
import { OfflineBanner } from './src/components/OfflineBanner';

import HomeScreen from './src/screens/HomeScreen';
import MarketplaceScreen from './src/screens/MarketplaceScreen';
import TransportScreen from './src/screens/TransportScreen';
import AlertsScreen from './src/screens/AlertsScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import PostDetailScreen from './src/screens/PostDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  const { isConnected } = useNetwork();

  return (
    <>
      {!isConnected && <OfflineBanner />}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Home: 'home',
              Marketplace: 'store',
              Transport: 'truck',
              Alerts: 'bell',
              Dashboard: 'chart-bar',
            };
            return <Icon name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#238636',
          tabBarInactiveTintColor: '#7d8590',
          tabBarStyle: { backgroundColor: '#0d1117', borderTopColor: '#30363d' },
          headerStyle: { backgroundColor: '#0d1117' },
          headerTintColor: '#e6edf3',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Marketplace" component={MarketplaceScreen} />
        <Tab.Screen name="Transport" component={TransportScreen} />
        <Tab.Screen name="Alerts" component={AlertsScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="PostDetail" component={PostDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

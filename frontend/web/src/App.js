import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Navbar } from './components/Navbar';
import { OfflineBanner } from './components/OfflineBanner';
import { useNetwork } from './hooks/useNetwork';
import { HomeScreen } from './screens/HomeScreen';
import { MarketplaceScreen } from './screens/MarketplaceScreen';
import { TransportScreen } from './screens/TransportScreen';
import { AlertsScreen } from './screens/AlertsScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { ChatScreen } from './screens/ChatScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignupScreen } from './screens/SignupScreen';

const AppShell = () => {
  const { isConnected } = useNetwork();

  return (
    <div style={{ backgroundColor: '#0d1117', minHeight: '100vh' }}>
      {!isConnected && <OfflineBanner />}
      <Navbar title="Shambaverse" />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/marketplace" element={<MarketplaceScreen />} />
        <Route path="/transport" element={<TransportScreen />} />
        <Route path="/alerts" element={<AlertsScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </Provider>
  );
}

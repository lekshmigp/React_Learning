// App.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { store } from './src/store/store';
import LearningScreen from './src/screens/learning';
import SaveForLaterScreen from './src/screens/save-for-later';
import { LoginScreen } from './src/screens/user/loginScreen'; // ✅ Import LoginScreen

function AppContent() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [currentScreen, setCurrentScreen] = useState('learning');

  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'learning' && styles.activeNav]}
          onPress={() => setCurrentScreen('learning')}
        >
          <Text style={[styles.navText, currentScreen === 'learning' && styles.activeNavText]}>
             Learning
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'saved' && styles.activeNav]}
          onPress={() => setCurrentScreen('saved')}
        >
          <Text style={[styles.navText, currentScreen === 'saved' && styles.activeNavText]}>
            📌 Saved
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.screenContainer}>
        {currentScreen === 'learning' ? (
          <LearningScreen />
        ) : (
          <SaveForLaterScreen />
        )}
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  navButton: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 },
  activeNav: { backgroundColor: '#007AFF' },
  navText: { fontSize: 15, color: '#666', fontWeight: '600' },
  activeNavText: { color: '#fff' },
  screenContainer: { flex: 1 },
});
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from './userSlice';

export function LoginScreen() {
  const dispatch = useDispatch();
  const { isLoggedIn, userData } = useSelector((state) => state.user);

  const handleLogin = () => {
    // Fake a server response
    const mockResponse = {
      user: { name: 'Student 001', email: 'student@expo.io' },
      token: 'SECRET_TOKEN_123'
    };
    
    dispatch(loginSuccess(mockResponse));
  };

  return (
    <View style={styles.authBox}>
      {isLoggedIn ? (
                    <View>
                    <Text>Welcome back, {userData.name}!</Text>
                    <TouchableOpacity style={styles.btnRed} onPress={() => dispatch(logout())}>
                        <Text style={{color: 'white'}}>Logout</Text>
                    </TouchableOpacity>
                    </View>
                ) : (
                            <TouchableOpacity style={styles.btnGreen} onPress={handleLogin}>
                            <Text style={{color: 'white'}}>Login to App</Text>
                            </TouchableOpacity>
                        )}
    </View>
  );
}

const styles = StyleSheet.create({
  authBox: { padding: 20, backgroundColor: '#f0f0f0', borderRadius: 10, margin: 10 },
  btnGreen: { backgroundColor: 'green', padding: 15, borderRadius: 5 },
  btnRed: { backgroundColor: 'red', padding: 15, borderRadius: 5, marginTop: 10 }
});
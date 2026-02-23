// src/screens/save-for-later.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookmark } from '../store/slices/bookmarkslice';
import { logout } from '../store/slices/userSlice';

export default function SaveForLaterScreen() {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.bookmarks.items);

  const handleRemoveBookmark = (item) => {
    dispatch(toggleBookmark(item));
  };

  const renderLogoutButton = () => (
    <TouchableOpacity 
      onPress={() => dispatch(logout())} 
      style={styles.logoutBtn}
    >
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );

  if (savedItems.length === 0) {
    return (
      <View style={styles.pageContainer}>
        {renderLogoutButton()}
        <View style={styles.container}>
          <Text style={styles.header}>📌 Save for Later</Text>
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📭</Text>
            <Text style={styles.emptyText}>No saved items yet!</Text>
            <Text style={styles.emptySubtext}>
              Go to Learning and save topics you want to read later.
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.pageContainer}>
      {renderLogoutButton()}
      
      <View style={styles.container}>
        <Text style={styles.header}>📌 Save for Later</Text>
        <Text style={styles.subHeader}>
          {savedItems.length} {savedItems.length === 1 ? 'item' : 'items'} saved
        </Text>
        
        <FlatList
          data={savedItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.topicTitle}>{item.title}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveBookmark(item)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  logoutBtn: {
    backgroundColor: '#555',
    padding: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
    borderRadius: 5,
    margin: 10,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    color: '#333',
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#FF3B30',
    borderRadius: 5,
    marginLeft: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
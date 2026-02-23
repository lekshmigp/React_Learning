// src/screens/learning.js
import React, {useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookmark,fetchBookmark } from '../store/slices/bookmarkslice';

export default function LearningScreen(){
  const dispatch = useDispatch();
  const {topics,loading ,error, items: savedItems }= useSelector((state)=> state.bookmarks);

useEffect(()=>{
  if(topics.length ===0){
    dispatch(fetchBookmark());
  }
}, [topics.length,dispatch]);

  const handleToggleBookmark = (item) => {
    dispatch(toggleBookmark(item));
  };

  const isSaved = (id) => {
    return savedItems.some((item) => item.id === id);
  };
  if(loading){
    return (
      <View style={styles.centerContainer}>
        <Text>Loading topics...</Text>
      </View>
    )
  }
  if(error){
    return(
      <View style={styles.centerContainer}>
        <Text>Error loading topics: {error}</Text>
        <TouchableOpacity style={styles.button} onPress={()=> dispatch(fetchBookmark())}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Start Learning</Text>
      
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const saved = isSaved(item.id);
          return (
            <View style={styles.card}>
              <Text style={styles.topicTitle}>{item.title}</Text>
              <TouchableOpacity
                style={[styles.button, saved ? styles.savedButton : styles.normalButton]}
                onPress={() => handleToggleBookmark(item)}
              >
                <Text style={styles.buttonText}>
                  {saved ? '✓ Saved' : 'Save for Later'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
    centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
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
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  normalButton: {
    backgroundColor: '#007AFF',
  },
  savedButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  loadingText: {
    marginTop:10,
    color:'#566',
  },
  errorText: {
    color:'red',
    marginBottom:10,
    fontSize:10,

},


});
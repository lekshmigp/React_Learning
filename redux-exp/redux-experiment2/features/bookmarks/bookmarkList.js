import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import{View,Text,TouchableOpacity,StyleSheet, ScrollView ,Pressable } from 'react-native';
import { removebookmark,addbookmark } from './bookmarkSlice';
import { logout } from '../user/userSlice';

export function BookmarkList() {
    const bookmarks = useSelector((state)=>state.bookmarks);
    const dispatch = useDispatch();
    return (
        <View style = {styles.container}>
            {/* Logout Button at the top */}
      <TouchableOpacity 
        onPress={() => dispatch(logout())} 
        style={styles.logoutBtn}
      >
        <Text style={{ color: 'white' }}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Your Lessons</Text>

            <Text style ={styles.title}>Your saved lesson({bookmarks.length})  </Text>
            
            <ScrollView>
                {bookmarks.map((lesson ,index)=>(
                    <View key={index} style={styles.Item}>
                        <Text> {lesson}</Text>
                        <TouchableOpacity onPress={()=>dispatch(removebookmark(lesson))} style={styles.deleteButton}>
              <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
            <Text> -------  </Text>
            <TouchableOpacity onPress={()=>dispatch(addbookmark(lesson))} style={styles.addButton}>
              <Text style={{ color: 'white' }}>Add</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 10, 
    borderBottomWidth: 1 
  },
  logoutBtn: {
    backgroundColor: '#555',
    padding: 8,
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginBottom: 10
  },
  deleteButton: { backgroundColor: 'red', padding: 5, borderRadius: 5 },
  addButton: { backgroundColor: 'green', padding: 5, borderRadius: 5 }
});
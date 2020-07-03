import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';

import { Context } from '../context/BlogContext';

import { FontAwesome } from '@expo/vector-icons';



const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return <View>
    <Button
      title='Add New Blog'
      onPress={addBlogPost}
    />
    <FlatList
      data={state}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} -- ID: {item.id}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <FontAwesome style={styles.icon} name="trash-o" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  </View>
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    //  borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'grey',
  },
  title: {
    fontSize: 18,

  },
  icon: {
    fontSize: 28,
  }

});

export default IndexScreen;
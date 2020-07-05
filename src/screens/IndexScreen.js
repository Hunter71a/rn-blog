import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    }; 
  }, []);


  return <View style={styles.container}>
    <Text style={styles.title}>Blog List</Text>
    {/* <ButtonStyle
      title='Add New Blog'
      pressed={addBlogPost}
    /> */}
    <FlatList
      data={state}
      keyExtractor={(blogPost) => blogPost.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
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

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    //headerRight: <Feather name="plus" size={30} color="black" />
    // headerRight: <Entypo name="add-to-list" size={24} color="black" />
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <View style={styles.addButton}>
          <Feather name="plus" size={30} margin={20} color="black" />
        </View>
      </TouchableOpacity>
    ),

  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    //  borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'grey',
  },
  add: {
    height: 20,
    width: 40,
    margin: 20,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    fontStyle: 'italic',

  },
  icon: {
    fontSize: 28,
  }

});

export default IndexScreen;
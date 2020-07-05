import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import { Context as blogContext } from '../context/BlogContext';
import ButtonStyle from '../components/ButtonStyle';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const { state, editBlogPost } = useContext(blogContext);

  const blogPost = state.find(blog => blog.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, ()=> navigation.pop());
      }}
    />

  );

}


// REFACTORED TO AND MOVED TO SEPERATE COMPONENET called "BlogPostForm.js"
//   const [title, setTitle] = useState(blogPost.title);
//   const [content, setContent] = useState(blogPost.content);

//   return (
//   <View>
//     <Text>  Edit Screen -  ID: {navigation.getParam('id')}  </Text>
//     <TextInput 
//     value={title}  
//     onChangeText={newTitle => setTitle(newTitle)}
//     />
//     <Text>{title}</Text>
//     <Text> {content}</Text>
//   </View>
//   )
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 15,
    padding: 5,

  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: -20,
    marginBottom: 20,
    fontStyle: 'italic',
    marginLeft: -20,
    textShadowColor: 'pink',
    textShadowRadius: 5,
  }
});

export default EditScreen;



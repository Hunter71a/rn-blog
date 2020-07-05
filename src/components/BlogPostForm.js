import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import { Context as blogContext } from '../context/BlogContext';
import ButtonStyle from '../components/ButtonStyle';

const BlogPostForm = ({ onSubmit, initialValues = { title: '', content: '' } }) => {

  const { addBlogPost } = useContext(blogContext);


  const { state } = useContext(blogContext);

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  // const blogPost = state.find(
  //   blog => blog.id === navigation.getParam('id')
  // );

  //navigation.getParam('id');


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Save Blog Post</Text>
      <Text style={styles.label}>Enter Title:   </Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => { setTitle(text) }} />
      <Text style={styles.label}>Enter Content:   </Text>
      <TextInput style={styles.input} value={content} onChangeText={blahblahblah => setContent(blahblahblah)} />
      <Text>Title:    {title}</Text>
      <Text>Content:   {content}</Text>
      <ButtonStyle
        title='Save Blog Post'
        pressed={() => {
          onSubmit(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};


// BlogPostForm.defaultProps = {
//   initialValues: {
//     title: '',
//     content: '',
//   }
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

export default BlogPostForm;
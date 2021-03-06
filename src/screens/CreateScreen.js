import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import { Context as blogContext } from '../context/BlogContext';
import ButtonStyle from '../components/ButtonStyle';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { addBlogPost } = useContext(blogContext);

  const { state } = useContext(blogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
      }}
    />
  );
}

// const blogPost = state.find(
//   blog => blog.id === navigation.getParam('id')
// );

//navigation.getParam('id');

// REPLACE WITH INPUT FORM COMPONENT 
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create New Blog</Text>
//       <Text style={styles.label}>Enter Title:   </Text>
//       <TextInput style={styles.input} value={title} onChangeText={(text) => { setTitle(text) }} />
//       <Text style={styles.label}>Enter Content:   </Text>
//       <TextInput style={styles.input} value={content} onChangeText={blahblahblah => setContent(blahblahblah)} />
//       <Text>Title:    {title}</Text>
//       <Text>Content:   {content}</Text>
//       <ButtonStyle
//         title='Add Blog Post'
//         pressed={() => {
//           addBlogPost(title, content, () => {
//             navigation.navigate('Index');
//           });
//         }}
//       />
//     </View>
//   );
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

export default CreateScreen;
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Context as blogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { state } = useContext(blogContext);

  const blogPost = state.find(
    blog => blog.id === navigation.getParam('id')
  );

  //navigation.getParam('id');

  return (
    <View>
      <Text>Create Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
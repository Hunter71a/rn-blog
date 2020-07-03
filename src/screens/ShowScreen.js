import React, {useContext} from 'react';
import {View, StyleSheet, Text}  from 'react-native';

import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);

  //navigation.getParam('id');

  return <View>
    <Text>Show Screen</Text>
  </View>
};

const styles = StyleSheet.create({});

export default ShowScreen;
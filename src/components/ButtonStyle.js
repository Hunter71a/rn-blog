import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ButtonStyle = ({ title, pressed }) => {
  return (
    <View>
      <Button
        title={title}
        onPress={pressed}
        style={styles.button}
      />
    </View>

  )
};

const styles = StyleSheet.create({
  button: {

  },
});

export default ButtonStyle;
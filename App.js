import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';

import CreateScreen from './src/screens/CreateScreen';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);




const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// 
// return {
//   headerRight: () => (
//     <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//       <Feather name="plus" size={30} />
//     </TouchableOpacity>
//   ),
// };
import {View, StatusBar, StyleSheet} from 'react-native';
import React from 'react'
import MusicPlayer from './screens/MusicPlayer'
import SongListView from './screens/SongListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Good Stream"
          component={SongListView}
        />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // return (
  //   <View style= {style.container}>
  //     <StatusBar barStyle="light-content" />
  //     <SongListView />
  //     {/* <MusicPlayer /> */}
  //   </View>
  // );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

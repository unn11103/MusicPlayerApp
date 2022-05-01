import { View, Text, SafeAreaView, FlatList, Image, StyleSheet } from 'react-native';
import songs from '../model/Songs';
import React, {useEffect, useRef, useState} from 'react';
import MusicPlayer from './MusicPlayer';

const SongListView = ({navigation}) => {
  const oneSong = ({ item }) => (
    <View style={ styles.item }> 
      <View style={ styles.avatarContainer }>
        <Image source={ {uri: item.artwork}} style={ styles.avatar } />
      </View>      
      <Text onPress={() => navigation.navigate('MusicPlayer',{'songId' : item.id})} style={ styles.name } > {item.title} </Text>
    </View>    
  );

  const headerComponent = () => {
    return <Text style={ styles.listHeadline }>Good Stream</Text>        
  }

  const listSeparator = () => {
    return <View style={ styles.separator } />
  }    

  return (    
    <SafeAreaView style={ styles.container }>
      <FlatList 
        ListHeaderComponentStyle = { styles.listHeader }
        ListEmptyComponent = { <Text>This List is a very Flat list</Text> }
        data = { songs }
        renderItem={oneSong}        
        ItemSeparatorComponent={ listSeparator }
      />      
    </SafeAreaView>
  );
};

export default SongListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 21,
  },

  listHeader: {
    height: 55,    
    alignItems: 'center',
    justifyContent: 'center',    
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#7B52AB',
  },

  listHeadline: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 21,
  },

  item: {
    flex: 1,
    flexDirection: 'row',    
    alignItems: 'center',
    paddingVertical: 13,    
  },

  avatarContainer: {        
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  
  avatar: {
    height: 55,
    width: 55,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  },
});


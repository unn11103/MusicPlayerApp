const songs = []

import firestore from '@react-native-firebase/firestore';
firestore()
  .collection('songs_react')
  .get()
  .then(querySnapshot => {
    var i = 1;
    querySnapshot.forEach(documentSnapshot => {
      let data = documentSnapshot.data();
      let entry = {
        "id" : i,
        "title" : data.title,
        "artist" : data.artist,
        "artwork" : data.artwork,
        "url" : data.url
      }
      songs.push(entry)
      i++;
      //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });

export default songs;
  
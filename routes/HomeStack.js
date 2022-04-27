import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SongListScreen} from '../screens/SongListScreen';
import {MusicPlayer} from '../screens/MusicPlayer';

const screens = {
    SongList: {
        screen : SongListScreen
    },
    MusicPlayerScreen : {
        screen : MusicPlayer
    }

}

const HomeStack = createNativeStackNavigator(screens);

export default HomeStack;
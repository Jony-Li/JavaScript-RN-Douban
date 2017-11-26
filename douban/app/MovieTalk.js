import React,{Component} from 'react';
import MovieList from './Components/MovieList';
import USBox from './Components/USBox';
import Featured from './Components/Featured';
import {
    TabBarIOS,
} from 'react-native';
//import TabNavigator from 'react-native-tab-navigator';


class MovieTalk extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Featured/>
        );
    }
}
export {MovieTalk as default}


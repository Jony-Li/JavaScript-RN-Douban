import React,{Component} from 'react';
import MovieList from './MoveList';
import styles from '../Styles/Main';
import {
    View,
    Text,
    Navigator,
} from 'react-native';

class Featured extends Component{
    render(){
        return(
            <Navigator
                style={styles.container}
                initialRoute={{
                    title:'推荐电影',
                    component:MovieList
                }}
            />

        );
    }
    

}
export {Featured as default}
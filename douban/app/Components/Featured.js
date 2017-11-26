import React,{Component} from 'react';
import MovieList from './MovieList';
import styles from '../Styles/Main';
import {
    View,
    Text,
} from 'react-native';
//import {Navigator} from  'react-native-deprecated-custom-components';


class Featured extends Component{
    render(){
        return(
            <View style={styles.container}><Text>Featured</Text></View>

        );
    }
}
export {Featured as default}
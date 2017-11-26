import React,{Component} from 'react';
import styles from '../Styles/Main';
import {
    View,
    Text,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    Touchable,
} from 'react-native';

class MovieDetail extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.loading}>
                    <Text>MovieDetail</Text>
                </View>
            </View>
        );
    }
}

export {MovieDetail as default};
import React, {Component} from 'react';
import SearchForm from './SearchForm';
import styles from '../Styles/Main';
import icons from '../Assets/Icons';
import {
    View,
    Text,
    TouchableHighlight,
    ToolbarAndroid
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';


class Search extends Component {
    render() {
        return (
            <SearchForm navigator={this.props.navigator} />
        );
    }
}

export {Search as default}
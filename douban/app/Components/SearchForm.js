import React, {Component} from 'react';
import styles from '../Styles/Main';
import SearchResult from './SearchResult';
import icons from '../Assets/Icons';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    ToolbarAndroid
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';


class SearchForm extends Component {

    constructor(props){
        super(props);
        this.state={
            query:''
        }
    }

    fetchData(){
        const REQUEST_URL=`https://api.douban.com/v2/movie/search?q=${this.state.query}`;
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
            console.log(responseData);
            this.props.navigator.push({
                title:responseData.title,
                component:SearchResult,
                passProps:{
                    results:responseData.subjects,
                }
            });
        }).done();
    }
    render() {
        {/*            <MovieList navigator={this.props.navigator}/>*/}
        return (
            <View style={styles.searchView}>
                <TextInput style={{height:50,marginBottom:-5}}
                           placeholder='搜索……'
                           underlineColorAndroid={'transparent'}
                           //secureTextEntry
                           //placeholderTextColor='#000000'
                           //autoFocus
                           //autoCorrect={true}
                           //defaultValue='肖生克的救赎'
                           //editable={false}
                           //keyboardType='url'
                           clearButtonMode='always'
                           //onFocus={()=>{console.log("onFocus")}}
                           //onBlur={()=>{console.log("obBlur")}}
                           //onChange={()=>{console.log("onChange")}}
                           onChangeText={(query)=>{
                               this.setState({
                                   query:query,
                               });
                           }}
                           //onEndEditing={()=>{console.log("onEndEditing")}}
                           onSubmitEditing={this.fetchData.bind(this)}
                />
            </View>
        );
    }
}

export {SearchForm as default}
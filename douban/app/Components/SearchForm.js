import React, {Component} from 'react';
import styles from '../Styles/Main';
import SearchResult from './SearchResult';
import icons from '../Assets/Icons';
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    TouchableHighlight,
    ToolbarAndroid
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';


class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            loaded: false,
        }
    }
    fetchData() {
        this.setState({
            loaded: true,
        });
        console.log("fetchData: " + " " + this.state.loaded);
        const REQUEST_URL = `https://api.douban.com/v2/movie/search?q=${this.state.query}`;
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                this.setState({
                    loaded: false,
                });
                console.log("done: " + " " + this.state.loaded);
                this.props.navigator.push({
                    title: responseData.title,
                    component: SearchResult,
                    passProps: {
                        results: responseData.subjects,
                    }
                });
            }).done();
    }

    render() {
        {/*            <MovieList navigator={this.props.navigator}/>*/}
        /*if (this.state.loaded) {
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        {/!*设置进度条 颜色 大小*!/}
                        <ActivityIndicator
                            color="#2AA145"
                            size="large"/>
                        <Text style={styles.processText}>加载中……</Text>
                    </View>
                </View>
            );
        }*/
        return (
            <View style={styles.searchView}>
                <TextInput style={{height: 50, marginBottom: -5}}
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
                           //onChange={() => {console.log("onChange" + " " + this.state.loaded);}}
                           onChangeText={(query) => {
                               this.setState({
                                   query: query,
                                   //loaded: true,
                               });
                               //console.log("onChangeText" + " " + this.state.loaded);
                           }}
                           //onEndEditing={()=>{console.log("onEndEditing")}}
                           onSubmitEditing={this.fetchData.bind(this)}
                />
                <View style={{
                    position: 'absolute',
                    width:45,
                    height:45,
                    right: 5,
                    paddingRight: 1,
                    opacity:this.state.loaded?1:0}}>
                <ActivityIndicator
                    //animating={this.state.loaded}
                    style={{
                        //position: 'absolute',
                        right: 10,
                        paddingRight: 5,
                        top: 12,
                    }}
                    color="#2AA145"
                    size="small"/>
                </View>
            </View>
        );
    }
}

export {SearchForm as default}
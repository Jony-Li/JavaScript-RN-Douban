import React,{Component} from 'react';
import styles from '../Styles/Main';
import MovieDetail from './MovieDetail';
import {
    View,
    Text,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
class MovieList extends Component{
    constructor(props){
        super(props);
        this.state ={
            movies:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            }),
            loaded:false,//设置数据加载动画
        }
        this.fetchData();
        //处理模拟数据
        //ListView 关键的两个属性 dataSource readerRow
        /*        let dataSource = new ListView.DataSource({
                    rowHasChanged:(row1,row2) => row1 !== row2
                });
                let movies = [
                    {title:'肖生克的救赎'},
                    {title:'肖生克的救赎'},
                    {title:'肖生克的救赎'},
                    {title:'肖生克的救赎'},
                    {title:'肖生克的救赎'}
                ];
                this.state = {
                    movies:dataSource.cloneWithRows(movies),
                }*/
    }
    fetchData(){
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    movies:this.state.movies.cloneWithRows(responseData.subjects),
                    loaded:true,//表示数据已经获取到
                });
            }).done();
    }
    showMovieDetail(movie){
        alert(movie.title);
        this.props.navigator.push({
            title:movie.title,
            component:MovieDetail,
        });
    }
    /*
    * TouchableHighlight
    * 坑点1. 只支持一个子节点
    * 坑点2. 没有添加onPress 不会有touch效果
    *
    * */
    renderMovieList(movie){
        return(
            <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' onPress={() => this.showMovieDetail(movie)}>
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image source={{uri:movie.images.large}}
                               style={styles.image}
                        />
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>{movie.title}</Text>
                        <Text style={styles.itemMeta}>
                            {movie.original_title} ({movie.year})
                        </Text>
                        <Text style={styles.redText}>
                            {movie.rating.average}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    render(){
        if (!this.state.loaded){
            return(
                <View style={styles.container}>
                    <View style={styles.loading}>
                        {/*设置进度条 颜色 大小*/}
                        <ActivityIndicator
                            color="#6435c9"
                            size="large"/>
                        <Text style={styles.processText}>加载中……</Text>
                    </View>
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.movies}
                    renderRow={this.renderMovieList.bind(this)}
                    /* renderRow={
                        movie => <Text style={styles.itemText}>{movie.title}</Text>
                    }*/
                />
            </View>
        );
    }
}
export {MovieList as default}



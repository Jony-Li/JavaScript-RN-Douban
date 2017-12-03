import React, {Component} from 'react';
import styles from '../Styles/Main';
import MovieDetail from './MovieDetail';
import icons from '../Assets/Icons';
import {
    View,
    Text,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
var {width, height} = Dimensions.get('window');

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false,//设置数据加载动画
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

    fetchData() {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                console.log('fetchData......' + " responseData: " + responseData);
                //console.dir(responseData.subjects);
                this.setState({
                    movies: this.state.movies.cloneWithRows(responseData.subjects),
                    loaded: true,//表示数据已经获取到
                });
            }).done();
    }

    showMovieDetail(movie) {
        //alert(movie.id);
        this.props.navigator.push({
            title: movie.title,
            component: MovieDetail,
            passProps: {movie},
        });
    }

    /*
    * TouchableHighlight
    * 坑点1. 只支持一个子节点
    * 坑点2. 没有添加onPress 不会有touch效果
    *
    * */
    renderMovieList(movie) {
        return (
            <TouchableHighlight underlayColor='rgba(0,0,0,0.1)' onPress={() => this.showMovieDetail(movie)}>
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image source={{uri: movie.images.large}}
                               style={styles.image}
                        />
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>{movie.title}</Text>
                        {/*<Text style={styles.itemMeta}>
                            {movie.original_title} ({movie.year})
                        </Text>*/}
                        <View style={{flexDirection: 'row', width: width, height: 20, marginBottom: 4, paddingTop: 3}}>
                            {this._renderStar(movie.rating.average)}
                            <Text style={styles.ratingText}>
                                {movie.rating.average}
                            </Text>
                        </View>
                        <Text style={styles.itemMeta}>
                            导演：{movie.directors[0].name}
                        </Text>
                        <Text style={styles.itemMeta}>
                            主演：{movie.casts[0].name}/{movie.casts[1].name}
                        </Text>

                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    //绘制评分组件
    _renderStar(rating) {
        //rating = 0.4;
        let pointNum = rating.toString().split('.');
        pointNum = pointNum[1];
        let halfStar = Math.floor(rating) % 2;
        console.log("rating: " + rating + " pointNum: " + pointNum + " halfStar:" + halfStar);
        let stars = Math.floor(Math.floor(rating) / 2) + ( halfStar > 0 ? 0.5 : 0) + (pointNum >= 5 ? 0.5 : 0);
        console.log("stars:" + stars);
        let images = [];
        let drawHalfStar = true;
        if (Math.floor(stars) == stars) drawHalfStar = false;
        let flag = true;
        for (var i = 1; i <= 5; i++) {
            if (i <= stars && stars > 0.5) {
                images.push(
                    <View key={'i' + i}>
                        <Image source={{uri: icons.starOn, width: 13, height: 13}}/>
                    </View>);
            } else if (((0 < stars && stars < 1.5) && flag == true) || ((i - 0.5 <= stars && stars < i) && drawHalfStar == true )) {
                images.push(
                    <View key={'i' + i}>
                        <Image source={{uri: icons.starHalf, width: 13, height: 13}}/>
                    </View>);
                drawHalfStar = false;
                if (0 < stars < 1.5) {
                    flag = false;
                }
            } else {
                images.push(
                    <View key={'i' + i}>
                        <Image source={{uri: icons.starOff, width: 13, height: 13}}/>
                    </View>);
            }
        }
        return images;
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        {/*设置进度条 颜色 大小*/}
                        <ActivityIndicator
                            color="#2AA145"
                            size="large"/>
                        <Text style={styles.processText}>加载中……</Text>
                    </View>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Text style={[styles.navBar]}>推荐电影</Text>
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



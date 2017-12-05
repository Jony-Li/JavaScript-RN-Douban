import React, {Component} from 'react';
import SearchForm from './SearchForm';
import styles from '../Styles/Main';
import icons from '../Assets/Icons';
import {
    View,
    Text,
    ListView,
    Image,
    TouchableHighlight,
    ToolbarAndroid,
    Dimensions,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

var {width, height} = Dimensions.get('window');

class SearchResult extends Component {

    constructor(props) {
        super(props);
        let dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            movies: dataSource.cloneWithRows(this.props.results)
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.detailNavBar}>
                    <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' onPress={() => {
                        this.props.navigator.pop()
                    }}>
                        <Image source={{uri: icons.backHome}} style={styles.backIcon}/>
                    </TouchableHighlight>
                    <Text style={styles.detailNavBarText}>{this.props.title}</Text>
                </View>
                <ListView
                    dataSource={this.state.movies}
                    renderRow={this.renderMovieList.bind(this)}
                />
            </View>
        );
    }
    showMovieDetail(movie) {
        alert(movie.title);
    }
    /*
* TouchableHighlight
* 坑点1. 只支持一个子节点
* 坑点2. 没有添加onPress 不会有touch效果
*
* */
    renderMovieList(movie) {
        //console.dir(movie.directors);
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
                            导演：{this._showDirectors(movie)}
                        </Text>
                        <Text style={styles.itemMeta}>
                            主演：{this._showCasts(movie)}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _showDirectors(movie) {
        let directorsArray = movie.directors;
        if (directorsArray.length !== 0) {
            return directorsArray[0].name;
        } else {
            return '无';
        }
    }

    _showCasts(movie) {
        let casetsArray = movie.casts;
        if (casetsArray.length !== 0) {
            return casetsArray[0].name;
        } else {
            return '无';
        }
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
        if (Math.floor(stars) === stars) drawHalfStar = false;
        let flag = true;
        for (var i = 1; i <= 5; i++) {
            if (i <= stars && stars > 0.5) {
                images.push(
                    <View key={'i' + i}>
                        <Image source={{uri: icons.starOn, width: 13, height: 13}}/>
                    </View>);
            } else if (((0 < stars && stars < 1.5) && flag === true) || ((i - 0.5 <= stars && stars < i) && drawHalfStar === true )) {
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
}

export {SearchResult as default}
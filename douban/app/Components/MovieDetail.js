import React, {Component} from 'react';
import styles from '../Styles/Main';
import icons from '../Assets/Icons';
import {
    View,
    Text,
    ScrollView,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    Touchable,
    TouchableOpacity
} from 'react-native';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetail: '',
        }
        //alert(this.props.movie.id);//undefined
        const REQUEST_URL = `https://api.douban.com/v2/movie/subject/${this.props.movie.id}`;
        //const REQUEST_URL=`https://api.douban.com/v2/movie/subject/1292063`;
        this.fetchData(REQUEST_URL);
    }

    fetchData(REQUEST_URL) {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    movieDetail: responseData,
                });
            }).done();
    }

    render() {
        let movie = this.state.movieDetail;
        //alert(movie.summary);
        if (movie.summary !== undefined) {
            var summary = movie.summary.split(/\n/).map(p => {
                return (
                    <View style={{marginBottom: 15, paddingLeft: 6, paddingRight: 6}}>
                        <Text style={styles.itemText}>{p}</Text>
                    </View>
                );
            });

        }
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

                <ScrollView style={[styles.item, {flexDirection: 'column'}]}>
                    {/*                    <Text style={styles.itemText}>
                        {this.state.movieDetail.summary}
                    </Text>*/}
                    {summary}
                </ScrollView>
            </View>

        );
    }
}

export {MovieDetail as default};
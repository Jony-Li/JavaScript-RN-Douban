import React,{Component} from 'react';
import styles from '../Styles/Main';
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

class MovieDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            movieDetail:'',
        }
        //alert(this.props.movie.id);//undefined
        const REQUEST_URL=`https://api.douban.com/v2/movie/subject/${this.props.movie.id}`;
        //const REQUEST_URL=`https://api.douban.com/v2/movie/subject/1292063`;
        this.fetchData(REQUEST_URL);
    }
    fetchData(REQUEST_URL){
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    movieDetail:responseData,
                });
            }).done();
    }
    render(){
        let movie = this.state.movieDetail;
        //alert(movie.summary);
        if (movie.summary !== undefined){
            var summary = movie.summary.split(/\n/).map( p => {
                return(
                    <View style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
                        <Text style={styles.itemText}>{p}</Text>
                    </View>
                );
            });

        }
        return(
            <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' style={styles.container} onPress={()=> {this.props.navigator.pop()}} >
            <View style={styles.container}>
                <ScrollView style={[styles.item,{flexDirection:'column'}]} >
{/*                    <Text style={styles.itemText}>
                        {this.state.movieDetail.summary}
                    </Text>*/}
                    {summary}
                </ScrollView>
            </View>
            </TouchableHighlight>
        );
    }
}
export {MovieDetail as default};
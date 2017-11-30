import React, {Component} from 'react';
import MovieList from './MovieList';
import styles from '../Styles/Main';
import icons from '../Assets/Icons';
import {
    View,
    Text,
    TouchableHighlight,
    ToolbarAndroid
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';


class Featured extends Component {
    render() {
        {/* <View style={styles.container}><Text>Featured</Text></View>*/}
        const routes = [
            {title: '推荐电影', index: 0, component: MovieList},
            {title: 'Second Scene', index: 1},
        ];


        {/*<Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={(route, navigator) =>
                    <TouchableHighlight onPress={() => {
                        if (route.index === 0) {
                            navigator.push(routes[1]);
                        } else {
                            navigator.pop();
                        }
                    }}>
                        <Text>{route.title}</Text>

                    </TouchableHighlight>
                }
                style={{padding: 100}}
            />*/
        }

        {/* TouchableHighlight onPress={() => {
                        if (route.index === 0) {
                            navigator.push(routes[1]);

                            <MovieList title={route.title} navigator={navigator} />
                        } else {
                            navigator.pop();
                        }
                    }}>
                        <Text>{route.title}</Text>
                    </TouchableHighlight>*/
        }


        {/*            <Navigator
                initialRoute={{name: "推荐电影", component: MovieList}}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.props} navigator={navigator}/>
                    }
                }
                style={{paddingTop: 0,backgroundColor:'#6435c9'}}
            />*/}

        return (
            <MovieList navigator={this.props.navigator}/>
        );
    }
}

export {Featured as default}
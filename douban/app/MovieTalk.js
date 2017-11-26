import React, {Component} from 'react';
import MovieList from './Components/MovieList';
import USBox from './Components/USBox';
import Featured from './Components/Featured';
import styles from './Styles/Main';
import icons from './Assets/Icons';

import {
    View,
    Text,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


class MovieTalk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        {/* tabBarStyle 设置导航栏的背景颜色*/}
        return (
            <TabNavigator tabBarStyle={styles.tabBar}>
                <TabNavigator.Item selected={this.state.selectedTab === 'featured'}
                                   onPress={() => {
                                       this.setState({
                                           selectedTab: 'featured'
                                       })
                                   }}
                                   title='推荐电影'
                                   titleStyle={styles.tabText}
                                   selectedTitleStyle={styles.selectedTabText}
                                   renderIcon={() => <Image
                                       style={styles.tabIcon}
                                       source={{uri: icons.star}}/>}

                                   renderSelectedIcon={() => <Image
                                       style={styles.tabIcon}
                                       source={{uri: icons.starActive}}/>}>
                    <Featured/>
                </TabNavigator.Item>
                <TabNavigator.Item selected={this.state.selectedTab === 'us_box'}
                                   title='欧美院线'
                                   titleStyle={styles.tabText}
                                   selectedTitleStyle={styles.selectedTabText}
                                   renderIcon={() => <Image
                                       style={styles.tabIcon}
                                       source={{uri: icons.list}}/>}
                                   renderSelectedIcon={() => <Image
                                       style={styles.tabIcon}
                                       source={{uri: icons.listActive}}/>}
                                   onPress={() => {
                                       this.setState({
                                           selectedTab: 'us_box',
                                       });
                                   }}
                >
                    <USBox/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

export {MovieTalk as default}


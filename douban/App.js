/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                {/*Image 组件必须要设置宽高才能显示*/}
                <Image
                    style={[{position:'relative'},styles.backgroundImage]}
                    source={{uri: 'http://c.hiphotos.baidu.com/baike/pic/item/d009b3de9c82d158b62f49ef890a19d8bc3e423a.jpg'}}>
                </Image>
                <View style={[{position:'absolute'},styles.overlay]}>
                    <Text style={styles.overlayHeader}>胡歌</Text>
                    <Text style={styles.overlaySubHeader}>猎场</Text>
                </View>
                {/*<HeaderText>jony test</HeaderText>
                <Text style={[styles.itemText,{fontStyle:'italic'}]}>
                    www.<Text style={{fontWeight:'600',textDecorationLine:'line-through'}}>
                    baidu</Text>.com</Text>
                <View style={[styles.item,styles.itemOne]}>
                    <Text style={styles.itemText}>1</Text>
                </View>
                <View style={[styles.item,styles.itemTwo]}>
                    <Text style={styles.itemText}>2</Text>
                </View>
                <View style={[styles.item,styles.itemThree]}>
                    <Text style={styles.itemText}>3</Text>
                </View>*/}
            </View>
        );
    }
}

//自定义文本组件
class HeaderText extends Component {
    render() {
        return (
            <Text style={styles.itemText}>
                {this.props.children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    overlay:{
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center',
        justifyContent:'space-around',
        width:360,
    },
    overlayHeader:{
        fontSize:33,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#eae7ff',
        padding:10,
    },
    overlaySubHeader:{
        fontSize:16,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#eae7ff',
        padding:10,
        paddingTop:0,

    },
    backgroundImage: {
        flex: 1,
        position:'relative',
        resizeMode:'cover',//设置图片的缩放模式  包含：contain 拉伸：stretch cover
    },
    image: {
        width: 80,
        height: 100,
        margin: 6,
    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#6435c9",
        margin: 6,
        flex: 1
    },
    itemOne: {
        alignSelf: 'flex-start',
    },
    itemTwo: {},
    itemThree: {
        alignSelf: 'flex-end',
        flex: 2,
    },
    itemText: {
        fontSize: 33,
        fontFamily: 'Helvetica Neue',
        fontWeight: '200',
        color: "#6435c9",
        padding: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#eae7ff',
        paddingTop: 0,//paddingTop: 2
        flexDirection: 'column',//设置主轴方向 row  column
        justifyContent: "space-around",//符合伸缩盒模型(flex-box) center 居中 flex-start  flex-end  space-around space-between 定义控件的位置
        alignItems: 'stretch',//定义控件的缩放比例 flex-start flex-end center stretch 拉伸(默认)
    },
});

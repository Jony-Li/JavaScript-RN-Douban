import React from 'react';
import {
    StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
    backIcon:{
        width:22,
        height:22,
        marginLeft:8,
        marginTop:15,
    },
    detailNavBar:{
        flexDirection:'row',
        backgroundColor:'#2AA145',
        height:50,
    },
    navBar:{
        height:50,
        backgroundColor:'#2AA145',
        textAlign:'center',
        color:"#ffffff",
        paddingTop:8,
        fontSize:20,
        fontFamily: 'Helvetica Neue',
    },
    tabBar:{
        backgroundColor:'#2AA145',
    },
    tabText:{
        //color:'#000000',
        fontSize:10
    },
    selectedTabText:{
        color:'#ffffff'
    },
    tabIcon:{
        marginTop:25,
        marginBottom:-5,
        width:33,
        height:33
    },
    processText:{
        color:'#2AA145',
        fontSize:12,
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width: 80,
        height: 130,
        margin: 6,
    },
    item: {
        flexDirection:'row',//设置主轴方向
        borderBottomWidth:1,
        borderColor: "rgba(71, 71, 71,0.1)",
        paddingBottom:6,
        paddingTop:6,
        flex: 1
    },
    itemContent:{
        flex:1,
        marginLeft:13,
        marginTop:6,
    },
    itemHeader:{
        fontSize:18,
        fontFamily:'Helvetica Neue',
        fontWeight:'bold',
        color:'rgba(0,0,0,0.7)',
        marginBottom:6,
    },
    itemMeta:{
        fontSize:11,
        color:'rgba(0,0,0,0.5)',
        marginBottom:6,
    },
    ratingText:{
        color:'rgba(0,0,0,0.6)',
        paddingLeft:5,
        paddingTop:-10,
        fontSize:12,
    },
    itemText: {
        fontSize: 16,
        fontFamily: 'Helvetica Neue',
        fontWeight: '300',
        color: "rgba(0,0,0,0.8)",
        lineHeight:26,
    },
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:'space-around',
    }
})
export {styles as default }


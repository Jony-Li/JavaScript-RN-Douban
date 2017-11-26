import React from 'react';
import {
    StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:'#6435c9',
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
        color:'#6435c9',
        fontSize:12,
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width: 80,
        height: 100,
        margin: 6,
    },
    item: {
        flexDirection:'row',//设置主轴方向
        borderBottomWidth:1,
        borderColor: "rgba(100,53,201,0.5)",
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
        fontWeight:'300',
        color:'#6435c9',
        marginBottom:6,
    },
    itemMeta:{
        fontSize:16,
        color:'rgba(0,0,0,0.6)',
        marginBottom:6,
    },
    redText:{
        color:"#db2828",
        fontSize:15,
    },
    itemText: {
        fontSize: 33,
        fontFamily: 'Helvetica Neue',
        fontWeight: '200',
        color: "#6435c9",
        padding: 30,
    },
    container:{
        flex:1,
        backgroundColor:'#eae7ff',
        justifyContent:'space-around',
    }
})
export {styles as default }


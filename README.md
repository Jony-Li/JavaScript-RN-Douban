# JavaScript-RN-Douban(ReactNative project)

## ReactNative环境搭建
  * #react-native init douban
  * #npm install react-native-deprecated-custom-components --save-dev 坑点
  * #npm install react-native-tab-navigator --save-dev
  * #adb reverse tcp:8081 tcp:8081
  * #react-native start

## ReactNative版本控制
  * #npm update -g react-native-cli //更新本地的React Native的版本
  * #npm info react-native //查询react-native的npm包最新版本
  * #npm install --save react-native@0.18 //升级或者降级npm包的版本
  * #react-native upgrade//更新项目templates文件（可选）

## ReactNative 采坑
* **Navigator :** React Native中使用Navigator导航踩坑，由于目前Facebook 没有将最新的“react-native-deprecated-custom-components”上传npm，
所以按照React Native的提示安装“react-native-deprecated-custom-components”组件后仍然报错[“React-Native – undefined is not an object (“evaluating _react3.default.PropTypes.shape”)”](https://stackoverflow.com/questions/47420285/react-native-undefined-is-not-an-object-evaluating-react3-default-proptypes)
具体解决方式如下：
```jsx
#npm uninstall --save react-native-deprecated-custom-components
#npm install --save https://github.com/facebookarchive/react-native-custom-components.git
```
* **TouchableHighlight :** 坑点1. 只支持一个子节点； 坑点2. 没有添加onPress 不会有touch效果。

* **Navigator :** push跳转后this.props.movie取值为undefined。
```jsx
this.props.navigator.push({
    title:movie.title,
    component:MovieDetail,
    passProps:{movie},

```
根本原因是需要在Navigato的renderScene添加passProps属性。
```jsx
    <Navigator
	initialRoute={{ name: "推荐电影", component: Featured }}
	configureScene={(route) => {
	    return Navigator.SceneConfigs.PushFromRight;
	}}
	renderScene={(route, navigator) => {
	    let Component = route.component;
	    return <Component {...route} navigator={navigator} {...route.passProps} />
	}}
    />
```
* **Android代码修改后白屏 :** 1. 安装更改代码后的APK到手机; 2.停止react 服务,打开手机中的APK——不会白屏; 3.运行react-native start 
启动服务,再开始编辑js代码，进行实时部署。

* **TouchableHighlight异常问题 :** "Attempted to transition from state `RESPONDER_INACTIVE_PRESS_IN` to `RESPONDER_ACTIVE_LONG_PRESS_IN`, 
which is not supported."解决办法:这是开启了Debug JS Remotely模式,关闭它就好了.(文本信息要加入点击
事件,请用TouchableOpacity包裹)。

## Android IOS跨平台运行
* **Android :**  在Android Studio中直接导入douban目录下的android文件（该目录是Android Studio工程），并重新clean build运行。

# 豆瓣电影列表展示
![image](https://github.com/Jony-Li/JavaScript-RN-Douban/blob/master/douban/JavaScript-RN-Douban.gif)
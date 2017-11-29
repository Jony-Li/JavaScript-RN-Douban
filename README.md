# JavaScript-RN-Douban(ReactNative project)

## ReactNative环境搭建
  * #react-native init douban
  * #npm install react-native-deprecated-custom-components --save-dev 坑点
  * #npm install react-native-tab-navigator --save-dev

## ReactNative 采坑
* **Navigator :** React Native中使用Navigator导航踩坑，由于目前Facebook 没有将最新的“react-native-deprecated-custom-components”上传npm，
所以按照React Native的提示安装“react-native-deprecated-custom-components”组件后仍然报错[“React-Native – undefined is not an object (“evaluating _react3.default.PropTypes.shape”)”](https://stackoverflow.com/questions/47420285/react-native-undefined-is-not-an-object-evaluating-react3-default-proptypes)
具体解决方式如下：
```jsx
#npm uninstall --save react-native-deprecated-custom-components
#npm install --save https://github.com/facebookarchive/react-native-custom-components.git
```
* **TouchableHighlight :** 坑点1. 只支持一个子节点； 坑点2. 没有添加onPress 不会有touch效果。

## Android IOS跨平台运行
* **Android :**  在Android Studio中直接导入douban目录下的android文件[该目录是Android Studio工程]，并重新clean build运行

# 豆瓣电影列表展示
![image](https://github.com/Jony-Li/JavaScript-RN-Douban/blob/master/douban/JavaScript-RN-Douban.gif)
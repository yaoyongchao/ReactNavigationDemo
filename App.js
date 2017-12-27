/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Button,
    Image,

} from 'react-native';

import {StackNavigator, TabNavigator,DrawerNavigator} from 'react-navigation';
// import MainNav from './page/nav/MainNav'
import MainPage from './page/nav/MainPage';
import TabBarItem from './page/nav/TabBarItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  // static navigationOptions = {
  //     title:'首页',
  //     // header:null,
  // }
  render() {
      const {navigate} = this.props.navigation;
      // const mainNav = this.MainNav;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          react-navigation Demo 练习
        </Text>

          <Button title="摸我啊" onPress={() => navigate('chat')}/>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const MainNav = TabNavigator({
        //路由配置
        app:{screen: App,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./page/image/me.png')}
                        selectedImage={require('./page/image/me.png')}
                    />
                )
            },


        },
        main:{screen: MainPage,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        // source={focused ? require('./page/image/me.png') : require('./page/image/me.png')}
                        source={require('./page/image/me.png')}
                        style={{ width: 26, height: 26, tintColor: tintColor }}
                    />
                )
            }
        },

    },
    {// 设置底部导航栏
        swipeEnabled: true, // 是否允许横向滑动
        initialRouteName: 'app', // 设置默认的页面组件
        lazy: true, // 在app打开的时候将底部标签栏全部加载，默认false,推荐改成true
        tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
        tabBarOptions: {
            activeTintColor: '#4BC1D2',//活动标签的标签和图标颜色
            inactiveTintColor: '#000',//活动标签的标签和图标颜色
            showIcon:true, // 是否显示图标，默认关闭。
            showLabel:true, //是否显示label，默认开启。
            // style-tab bar的样式对象
            style: {
                backgroundColor: '#fcfcfc',
                height:54,
            },
            // tab的样式配置对象
            labelStyle: {
                fontSize: 12,
                margin:1,
                // color: '#111',
                // textAlign:'center',
                // marginTop: 0,
                // marginBottom: 2,

            },
            indicatorStyle:{
                height:0

            }
        },

        animationEnabled: true,
    }
);


module.exports = MainNav;
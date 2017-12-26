/**
 * Created by yaoyongchao on 17-12-19.
 * Description: App导航路由
 */

import {StackNavigator,} from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,

} from 'react-native';
import App from './App'
import MainPage from './page/nav/MainPage'
export default AppNav = StackNavigator({
    app: {
        screen: App,
        navigationOptions: {
            // headerTitle: '首页',
            title:'首页'
        }
    },
    main: {
        screen: MainPage,
        navigationOptions: {
            // headerTitle: '首页',
            title:'主页',
            headerRight: Button,
            // headerTintColor: 'red',
            // headerText: {
            //     color: 'green',
            // },
            headerTitleStyle: {
                color: 'green',
                textColor: 'red',
                textAlign: 'right',
                alignSelf: 'center'
            },

        }
    },

});

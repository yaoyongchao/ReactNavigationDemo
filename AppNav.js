/**
 * Created by yaoyongchao on 17-12-19.
 * Description: App导航路由
 */

import {StackNavigator,} from 'react-navigation';
import App from './App'
import MainPage from './page/nav/MainPage'
export default AppNav = StackNavigator({
    app: {Screen: App},
    main: {Screen: MainPage},

});

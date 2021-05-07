import {createStackNavigator} from 'react-navigation-stack';

//IMPORT SCENES
import LoginScreen from "../scenes/auth/Login";

import {headerStyle, headerTitleStyle} from '../theme'

//Create Routes
const AuthStack = createStackNavigator(
    {
        Login: LoginScreen
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: () => ({headerStyle, headerTitleStyle})
    }
);

export default AuthStack;
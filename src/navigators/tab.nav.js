import React from 'react';
import HomePage from '../components/Home';
import stackNav from './stack.nav';
import {TabNavigator} from "react-navigation";

export const tabNav = TabNavigator({
    About: {
        screen: stackNav,
        navigationOptions: ({navigation}) => ({
            title: 'About'
        })
    },
    Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
        })
    },

}, {
    initialRouteName: 'Home',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: '#406090',
        labelStyle: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
        }
    }
});

export default tabNav;
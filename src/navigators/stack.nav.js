import React from 'react';
import {StackNavigator} from "react-navigation";
import SettingsPage from '../components/Settings';
import AboutPage from '../components/About';
import {Platform} from "react-native";

const stackNav = StackNavigator({
    About: {
        screen: AboutPage,
        navigationOptions: ({navigation}) => ({
            title: 'About'
        })
    },
    Settings: {
        screen: SettingsPage,
        navigationOptions: ({navigation}) => ({
            title: 'Settings'
        })
    }
}, {
    navigationOptions: ({navigation}) => ({
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: '#406090',

            marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
        },
        headerTintColor: 'white',
    })
});

export default stackNav;
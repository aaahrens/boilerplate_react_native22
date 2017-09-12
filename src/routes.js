import React from 'react'
import {addNavigationHelpers, StackNavigator, TabNavigator} from "react-navigation";
import {connect} from 'react-redux';
import {Platform} from 'react-native';
import AboutPage from './components/About';
import Home from './containers/home/home.container';


export const homeStackNav = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            title: 'Browse'
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


export const TabNav = TabNavigator({
    homeStackNav: {
        screen: homeStackNav,
        navigationOptions: ({navigation}) => ({
            title: 'Browse',
        })
    },

    AboutPage: {
        screen: AboutPage,
        navigationOptions: ({navigation}) => ({
            title: 'Games'
        })
    },

}, {
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


export const StackNav = StackNavigator({
	TabNav: { screen: TabNav },
}, {
	navigationOptions: {
		headerStyle: {
			marginTop: Platform.OS === 'ios' ? 0 :Expo.Constants.statusBarHeight
		}
	}
});



class Routes extends React.Component {
	render() {
		return (
			<StackNav navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
			})} />
		);
	}
}


export default  connect((state) => ({
	nav: state.nav

	}), () => ({

	}))(Routes);






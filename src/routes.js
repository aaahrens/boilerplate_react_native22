
import React from 'react'
import {addNavigationHelpers, StackNavigator} from "react-navigation";
import HomePage from './components/Home'
import AboutPage from './components/About'
import {combineReducers, createStore} from "redux";
import {connect} from "react-redux";
import {
	Platform
} from 'react-native'


export const StackNav = StackNavigator({
	Home: { screen: HomePage },
	About: { screen: AboutPage },
}, {
	navigationOptions: { headerStyle: { marginTop: Platform.OS === 'ios' ? 0 :Expo.Constants.statusBarHeight } }
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
}))(Routes);






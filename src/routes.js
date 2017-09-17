import React from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {addNavigationHelpers, StackNavigator, TabNavigator} from 'react-navigation';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native'
import AboutPage from "./components/About";
import thunk from "redux-thunk";
import HomeReducer from "./containers/home/home.reducer";
// This function is used to create components.
// It expects a name and a list of optional links to other routes.
// The generated component is connected to Redux to display the content of the store.
// This function is used below to easily generate components.


// The nested StackNavigator
const NestedNavigator = StackNavigator({
	StackOne: {screen: AboutPage},
	StackTwo: {screen: AboutPage}
});


// Two tabs, second one is a nested StackNavigator
export const MainTabNav = TabNavigator({
	TabA: {
		screen: AboutPage
	},
	TabNested: {
		screen: NestedNavigator
	},
});

const HighestNavigator = StackNavigator({
	One: {screen: MainTabNav},
	Two: {screen: AboutPage}
});


// This connects the MainTabNav to Redux to delegate the whole routing
export const AppWithNavigationState = connect(
	state => ({
		nav: state.nav,
	}))
	(({dispatch, nav}) => (
	<HighestNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
));


// Redux setup.
// Creating reducer from the main navigator.



const appReducer = (state, action) => HighestNavigator.router.getStateForAction(action, state);

const allReducers = combineReducers({
	nav: appReducer,
	home : HomeReducer
});

export const store = createStore(allReducers , applyMiddleware(thunk));


// Ignore what is below. It is just some basic styling
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20
	},
	title: {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		padding: 16,
	},
	store: {
		padding: 6,
		backgroundColor: '#eee',
	}
});

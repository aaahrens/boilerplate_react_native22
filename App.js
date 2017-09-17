import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux'
import {AppWithNavigationState, store} from './src/routes'


export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState/>
			</Provider>
		)
	}
}


export const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
});

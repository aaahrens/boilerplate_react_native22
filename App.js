import React from 'react';
import {
	StyleSheet,
	Text, View, Image, Platform
} from 'react-native';

import {
	store
} from './src/store'


import {
	Provider
} from'react-redux'


import Routes from './src/routes'

export default class App extends React.Component{

	render(){
		return (
			<Provider store={store}>
				<Routes />
			</Provider>
		)
	}
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

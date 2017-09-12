import React from 'react';
import {StyleSheet} from 'react-native';
import {store} from './src/store'
import {Provider} from 'react-redux'
import Routes from './src/routes'

export default class App extends React.Component {

    render() {
        return (
			<Provider store={store}>
				<Routes/>
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

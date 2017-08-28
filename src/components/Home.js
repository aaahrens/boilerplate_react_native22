import React from 'react'
import {Button, Text, View, Platform} from "react-native";


class HomePage extends React.Component{

	static navigationOptions = ({ navigation }) => ({
		title: `Penis`,
	});

	render(){

		const { navigate } = this.props.navigation;
		const a = Platform.OS === "ios" ? 0 :22;

		return (
			<View >
				<Text>
					This is a home page
				</Text>
				<Button
					onPress={() => navigate('About',{title: 'Hello'})}
					title="About"
				/>
			</View>
		)
	}

}


export default HomePage


import React from 'react'
import {Text, View} from "react-native";

class AboutPage extends React.Component{

	static navigationOptions = ({ navigation }) => ({
		title: `dickerino`,
	});

	render(){
		return (
			<View>
				<Text>
					This is a about page
				</Text>
			</View>
		)
	}

}

export default AboutPage


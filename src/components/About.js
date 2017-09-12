import React from 'react'
import {Text, View} from "react-native";
import {styles} from "../../App";


class AboutPage extends React.Component{

    render(){

        const {navigate} = this.props.navigation;

        return (
			<View style={styles.view}>
				<Text>
					This is an about page
				</Text>
			</View>
        )
    }

}

export default AboutPage


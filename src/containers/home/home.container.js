import React from 'react'
import {ScrollView, Image, Text, View} from "react-native";
import {connect} from 'react-redux'
import * as homeActions from './home.actions'

class Home extends React.Component {


	componentWillMount() {
		this.props.getFeeds();
	}

	render() {
		if (this.props.isLoading) {
			return (
				<View>
					<Text>
						would show loading
					</Text>
				</View>
			)
		}

		return (
			<ScrollView>
				{
					this.props.browseFeed.map((item, index) => {
						return (
							<View>
								<Image source={{uri: item.get("Preview")}} style={{width: 100, height: 40}} />
								<Text key={index}>
									{
										item.get("Display_name")
									}
								</Text>
							</View>

						)
					})
				}
			</ScrollView>
		)
	}
}



export default connect((state) => ({
	browseFeed: state.home.browse,
	isLoading: state.home.loading

}), (dispatch) => ({
	getFeeds: () => dispatch(homeActions.fetchBrowse())
}))(Home)
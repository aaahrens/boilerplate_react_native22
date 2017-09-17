import React from 'react'
import {ScrollView, Image, Text, View, Button} from "react-native";
import {connect} from 'react-redux'
import * as homeActions from './home.actions'


class Home extends React.Component {


    componentWillMount() {
        this.props.getFeeds();
    }

    render() {
        // if (this.props.isLoading) {
        //     return (
			// 	<View>
			// 		<Text>
			// 			would show loading
			// 		</Text>
			// 	</View>
        //     )
        // }

        return (
			<View>



				<ScrollView>

					{/*<Button />*/}
                    {/*{*/}
                        {/*this.props.browseFeed.map((item, index) => {*/}
                            {/*return (*/}
								{/*<View key={index}>*/}
									{/*<Image source={{uri: item.get("Preview")}} style={{width: 100, height: 40}}/>*/}
									{/*<Text>*/}
                                        {/*{*/}
                                            {/*item.get("Display_name")*/}
                                        {/*}*/}
									{/*</Text>*/}
								{/*</View>*/}
                            {/*)*/}
                        {/*})*/}
                    {/*}*/}
				</ScrollView>
			</View>
        )
    }
}


export default connect((state) => ({
    // browseFeed: state.home.browse,
    // isLoading: state.home.loading

}), (dispatch) => ({
    getFeeds: () => dispatch(homeActions.fetchBrowse())
}))(Home)
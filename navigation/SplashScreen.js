import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Dimensions,
	StatusBar,
} from "react-native";
import { LinearGradient } from 'expo';
import check_if_first_launch from '../utils/check_if_first_launch';


export default class SplashScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);

		this.state = {
			is_first_launch: false,
		};
	}

	async componentWillMount() {
		const is_first_launch = await check_if_first_launch();
		this.setState({ is_first_launch });
	}

	render() {
		const { is_first_launch } = this.state;

		if (is_first_launch) {
			setTimeout(() => { this.props.navigation.navigate('Introduction') }, 2000);
		} else {
			setTimeout(() => { this.props.navigation.navigate('Home') }, 2000);
		}

		return (
			<View style={{ flex: 1, alignSelf: "center", alignItems: 'center', justifyContent: 'center' }}>
				<StatusBar
					hidden={true}
				/>
				<LinearGradient
					start={{ x: 0.0, y: -0.35 }} end={{ x: 0.75, y: 1.0 }}
					colors={['#e60099', '#0099cc']}
					style={styles.gradient}>
					<View style={styles.imageContainer}>
						<Image style={styles.img} source={require('../pictures/Break_the_zone_3.png')} />
					</View>
				</LinearGradient>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	gradient: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	img: {
		flex: 1,
		resizeMode: 'contain',
		width: Dimensions.get('window').width / 1.5,
		overflow: 'visible',
	},
});
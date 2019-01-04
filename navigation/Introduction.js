import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from 'expo';

import { strings } from '../locales/i18n';
import HomeScreen from './HomeScreen';

export default class Introduction extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<View style={{ flex: 1, alignSelf: "center", alignItems: 'center', justifyContent: 'center' }}>
				<LinearGradient
					start={{ x: 0.0, y: -0.35 }} end={{ x: 0.75, y: 1.0 }}
					colors={['#e60099', '#0099cc']}
					style={styles.gradient}>
					<View style={styles.container}>
						<Text style={styles.text_intro}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget porta dui. Proin bibendum quis magna ut maximus. Nam luctus turpis quam, at gravida arcu convallis eget. Morbi vitae sollicitudin mauris. Ut ut dolor dictum, hendrerit libero in, eleifend massa. Nulla aliquam augue ut enim faucibus, nec congue erat dapibus. Aenean aliquam vitae dui ac mollis. Integer accumsan ut ipsum in laoreet. In eget turpis finibus, rhoncus ex a, dictum orci. Etiam urna eros, porta quis maximus sagittis, imperdiet in mauris. In hac habitasse platea dictumst. Proin non eros eget.
                        </Text>
					</View>
					<View style={styles.button_container}>
						<TouchableWithoutFeedback
							onPress={() => this.props.navigation.navigate('Home')}>
							<View style={styles.button}>
								<Text style={styles.text_intro}>
									{strings('intro.next')}
								</Text>
							</View>
						</TouchableWithoutFeedback>
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
		justifyContent: 'space-evenly',
	},
	container: {
		flex: 0.7,
		margin: 70,
		backgroundColor: '#6bb9f0',
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button_container: {
		flex: 0.1,
		backgroundColor: '#6bb9f0',
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text_intro: {
		fontSize: 14,
		fontWeight: 'bold',
		fontFamily: 'System',
		color: 'white',
		margin: 30,
		textAlign: 'justify',	// doesn't exist on Android
	},
	button: {
		flex: 1,
		margin: 30,
		backgroundColor: '#6bb9f0',
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
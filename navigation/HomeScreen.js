import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
} from "react-native";
import { Icon } from 'react-native-elements'

import { strings } from './locales/i18n';

export default class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignSelf: "center", alignItems: 'center', justifyContent: 'center' }}>
				<TouchableWithoutFeedback>
					<View style={styles.button_start}>
						<LinearGradient
							colors={['#ffff00', '#ffb300']}
							style={styles.gradient2}>
							<Text style={styles.text_start}>
								{strings('start.challenge')}
							</Text>
						</LinearGradient>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback>
					<View style={styles.button_start}>
						<Text style={styles.text_start}>
							{strings('start.list_success')}
						</Text>
						<Icon
							name='trophy'
							type='evilicon'
							color='#f30000'
							size={30}
						/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button_start: {
		width: 300,
		height: 60,
		margin: 20,
	},
	text_start: {
		fontSize: 22,
		fontWeight: 'bold',
		fontFamily: 'System',
		color: '#f30000', // Better if I don't find how to add Text stroke
	},
});
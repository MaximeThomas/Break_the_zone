import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from "react-native";

import { strings } from '../locales/i18n';

export default class Challenge extends React.Component {
	render() {
		return (
			<View style={styles.background}>
				<Text>HelloWorld</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff0000',
	},
});
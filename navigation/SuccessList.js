import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
} from "react-native";

import { strings } from '../locales/i18n';

export default class SuccessList extends React.Component {
	static navigationOptions = {
		title: strings('screen.list.title'),
		headerStyle: {
			backgroundColor: '#6bb9f0',
		},
		headerTintColor: 'white',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	};

	render() {
		return (
			<View style={styles.background}>
				<ScrollView>
					<View style={styles.empty_container} />
					<View style={styles.success_container}>
						<Text style={styles.text}>
							Lorem
						</Text>
					</View>
					<View style={styles.success_container} />
					<View style={styles.success_container} />
					<View style={styles.success_container} />
					<View style={styles.success_container} />
					<View style={styles.success_container} />
					<View style={styles.success_container} />
					<View style={styles.success_container} />
					<View style={styles.success_container} />
					<View style={styles.success_container} />
					<View style={styles.success_container} />
					<View style={styles.success_container} />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: 'white',
	},
	empty_container: {
		height: 50,
		backgroundColor: 'white',
	},
	success_container: {
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		margin: 10,
		marginLeft: 30,
		marginRight: 30,
		backgroundColor: '#6bb9f0',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		fontFamily: 'System',
		color: 'white',
	},
});
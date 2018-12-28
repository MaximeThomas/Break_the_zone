import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from "react-native";

import { strings } from '../locales/i18n';

let day = new Date().getDate(); 		//Current Dates
let month = new Date().getMonth() + 1;	//Current Month
let year = new Date().getFullYear(); 	//Current Year
let date = day + '/' + month + '/' + year;

export default class Challenge extends React.Component {
	static navigationOptions = {
		title: strings('challenge.title'),
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
				<View style={styles.date_header}>
					<Text style={styles.date}>
						{date}
					</Text>
				</View>
				<View style={styles.name_header}>
					<Text style={styles.name}>
						Name
					</Text>
					<Text style={styles.name}>
						?/30
					</Text>
				</View>
				<View style={styles.rectangle}>
					<Text style={styles.text_challenge}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget porta dui. Proin bibendum quis magna ut maximus. Nam luctus turpis quam, at gravida arcu convallis eget. Morbi vitae sollicitudin mauris. Ut ut dolor dictum, hendrerit libero in, eleifend massa. Nulla aliquam augue ut enim faucibus, nec congue erat dapibus. Aenean aliquam vitae dui ac mollis. Integer accumsan ut ipsum in laoreet. In eget turpis finibus, rhoncus ex a, dictum orci. Etiam urna eros, porta quis maximus sagittis, imperdiet in mauris. In hac habitasse platea dictumst. Proin non eros eget.
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: 'white',
	},
	date_header: {
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	name_header: {
		flex: 0.2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	date: {
		fontSize: 25,
		fontWeight: 'bold',
		fontFamily: 'System',
		color: '#6bb9f0',
	},
	name: {
		fontSize: 25,
		fontWeight: 'bold',
		fontFamily: 'System',
		color: '#6bb9f0',
		margin: 50,
	},
	rectangle: {
		flex: 1,
		margin: 30,
		backgroundColor: '#6bb9f0',
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text_challenge: {
		fontSize: 14,
		fontWeight: 'bold',
		fontFamily: 'System',
		color: 'white',
		margin: 30,
		textAlign: 'justify',	// doesn't exist on Android
	},
});
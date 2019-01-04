import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableWithoutFeedback,
} from "react-native";
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo';

import { strings } from '../locales/i18n';
import Challenge from './Challenge';
import SuccessList from './SuccessList';

export default class HomeScreen extends React.Component {
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
					<View style={styles.banner}>
						<TouchableWithoutFeedback
							onPress={() => this.props.navigation.navigate('Challenge')}>
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
						<TouchableWithoutFeedback
							onPress={() => this.props.navigation.navigate('SuccessList')}>
							<View style={styles.button_start}>
								<LinearGradient
									colors={['#ffff00', '#ffb300']}
									style={styles.gradient2}>
									<View style={styles.button_success}>
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
								</LinearGradient>
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
		justifyContent: 'center',
	},
	gradient2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
	},
	button_start: {
		width: 300,
		height: 60,
		margin: 20,
	},
	button_success: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	text_start: {
		fontSize: 22,
		fontWeight: 'bold',
		fontFamily: 'System',
		color: '#f30000', // Better if I don't find how to add Text stroke
	},
	banner:
	{
		flex: 1,
		justifyContent: 'center',
	},
});
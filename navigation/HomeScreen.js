import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	AppRegistry,
	Image,
	Dimensions,
	TouchableWithoutFeedback,
	Modal,
} from "react-native";
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo';

import { strings } from '../locales/i18n';
import Challenge from './Challenge';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	state = {
		modalVisible: false,
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	render() {
		return (
			<View style={{ flex: 1, alignSelf: "center", alignItems: 'center', justifyContent: 'center' }}>
				<Modal
					animationType="fade"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setModalVisible(false);
					}}>
					<View style={{ backgroundColor: '#59abe3', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<Text>Hello World!</Text>
						<TouchableWithoutFeedback
							onPress={() => {
								this.setModalVisible(false);
							}}>
							<Text>Hide Modal</Text>
						</TouchableWithoutFeedback>
					</View>
				</Modal>

				<LinearGradient
					start={{ x: 0.0, y: -0.35 }} end={{ x: 0.75, y: 1.0 }}
					colors={['#e60099', '#0099cc']}
					style={styles.gradient}>
					<View style={styles.imageContainer}>
						<Image style={styles.img} source={require('../pictures/Break_the_zone_3.png')} />
					</View>
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
							onPress={() => {
								this.setModalVisible(true);
							}}>
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
	banner:
	{
		flex: 1,
		justifyContent: 'center',
	},
});
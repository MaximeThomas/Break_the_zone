import React from 'react';

import HomeScreen from './navigation/HomeScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen,
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
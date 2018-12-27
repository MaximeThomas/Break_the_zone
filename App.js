import React from 'react';

import HomeScreen from './navigation/HomeScreen';
import Challenge from './navigation/Challenge';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen,
	},
	Challenge: {
		screen: Challenge,
	}
},
	{
	  initialRouteName: 'Home',
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
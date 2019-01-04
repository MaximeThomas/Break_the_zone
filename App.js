import React from 'react';

import SplashScreen from './navigation/SplashScreen';
import HomeScreen from './navigation/HomeScreen';
import Challenge from './navigation/Challenge';
import SuccessList from './navigation/SuccessList';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
	Splash: {
		screen: SplashScreen,
	},
	Home: {
		screen: HomeScreen,
	},
	Challenge: {
		screen: Challenge,
	},
	SuccessList: {
		screen: SuccessList,
	}
},
	{
	  initialRouteName: 'Splash',
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
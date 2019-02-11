import React from 'react';

import SplashScreen from './navigation/SplashScreen';
import Introduction from './navigation/Introduction';
import Challenge from './navigation/Challenge';
import SuccessList from './navigation/SuccessList';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

const HomeScreen = createBottomTabNavigator({
	Challenge: Challenge,
	SuccessList: SuccessList,
},
{
	tabBarOptions: {
	activeTintColor: 'tomato',
	inactiveTintColor: 'gray',
	style: {
		backgroundColor: '#171F33',
	},
	labelStyle: {
		fontSize: 15,
		fontFamily: "System"
	}
},
});

HomeScreen.navigationOptions = {
	header: null,
};


const AppNavigator = createStackNavigator({
	Splash: {
		screen: SplashScreen,
	},
	Introduction: {
		screen: Introduction,
	},
	Home: {
		screen: HomeScreen,
	},
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
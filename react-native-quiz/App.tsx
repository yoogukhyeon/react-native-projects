import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" options={navigationOptionHome} component={Home} />
				<Stack.Screen name="Quiz" options={navigationOptionQuiz} component={Quiz} />
				<Stack.Screen name="Result" options={navigationOptionResult} component={Result} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const navigationOptionHome: any = ({ navigation }: any) => {
	return {
		title: "Let's get started",
		headerTitleAlign: 'center',
		headerTitleStyle: {
			color: 'rgb(37, 37, 37)',
			fontWeight: 'bold',
		},
	};
};

const navigationOptionQuiz: any = ({ navigation }: any) => {
	return {
		title: 'What is the answer?',
		headerTitleAlign: 'center',
		headerTitleStyle: {
			color: 'rgb(37, 37, 37)',
			fontWeight: 'bold',
		},
	};
};

const navigationOptionResult: any = ({ navigation }: any) => {
	return {
		title: 'Quiz Result',
		headerTitleAlign: 'center',
		headerTitleStyle: {
			color: 'rgb(37, 37, 37)',
			fontWeight: 'bold',
		},
	};
};

export default App;

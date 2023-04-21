import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';
import { RecoilRoot } from 'recoil';
//react-native settings
import { decode, encode } from 'base-64';
import { Text, View } from 'react-native';

if (!global.btoa) {
	global.btoa = encode;
}

if (!global.atob) {
	global.atob = decode;
}
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';
import Community from './screens/Community';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
import {
	useFonts,
	NotoSansKR_100Thin,
	NotoSansKR_300Light,
	NotoSansKR_400Regular,
	NotoSansKR_500Medium,
	NotoSansKR_700Bold,
	NotoSansKR_900Black,
} from '@expo-google-fonts/noto-sans-kr';
function QuizStackNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" options={navigationOptionHome} component={Home} />
			<Stack.Screen name="Quiz" options={navigationOptionQuiz} component={Quiz} />
			<Stack.Screen name="Result" options={navigationOptionResult} component={Result} />
		</Stack.Navigator>
	);
}

function CommunityStackNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Community" component={Community} />
		</Stack.Navigator>
	);
}

function MyTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					backgroundColor: 'rgb(9, 163, 52)',
				},

				tabBarActiveBackgroundColor: 'rgb(90, 90, 255);',
			}}
			initialRouteName="CommunityStackNavigation"
		>
			<Tab.Screen
				name="커뮤니티"
				component={CommunityStackNavigation}
				options={{
					headerTitleAlign: 'center',
					tabBarIcon: () => <Ionicons name="home" size={24} color="white" />,
					tabBarLabelStyle: { color: 'white', paddingBottom: 3 },
				}}
			/>
			<Tab.Screen
				name="퀴즈"
				component={QuizStackNavigation}
				options={{
					headerShown: false,
					tabBarIcon: () => <Ionicons name="settings" size={24} color="white" />,
					tabBarLabelStyle: { color: 'white', paddingBottom: 3 },
				}}
			/>
		</Tab.Navigator>
	);
}

function App() {
	let [fontsLoaded] = useFonts({
		fontBold: require('./assets/fonts/NotoSansKR-Bold.otf'),
		fontRegular: require('./assets/fonts/NotoSansKR-Regular.otf'),
		fontThin: require('./assets/fonts/NotoSansKR-Thin.otf'),
	});

	if (!fontsLoaded) {
		return (
			<View>
				<Text>hello</Text>
			</View>
		);
	}
	return (
		<RecoilRoot>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="BottomNavigation" component={MyTabs} />
					{/* <Stack.Screen name="Home" options={navigationOptionHome} component={Home} />
					<Stack.Screen name="Quiz" options={navigationOptionQuiz} component={Quiz} />
					<Stack.Screen name="Result" options={navigationOptionResult} component={Result} /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</RecoilRoot>
	);
}

const navigationOptionHome: any = ({ navigation }: any) => {
	return {
		title: "Let's get started",
		headerTitleAlign: 'center',
		headerTitleStyle: {
			color: 'rgb(37, 37, 37)',
			fontWeight: 'bold',
			fontSize: 22,
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
			fontSize: 22,
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
			fontSize: 22,
		},
	};
};

export default App;

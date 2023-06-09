import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecoilRoot } from 'recoil';
//react-native settings
import { useFonts } from '@expo-google-fonts/noto-sans-kr';
import { decode, encode } from 'base-64';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import TabBottomNavigation from './navigation/TabBottomNavigation';
import CommunityCreateScreen from './screens/community/CommunityCreateScreen';

if (!global.btoa) {
	global.btoa = encode;
}

if (!global.atob) {
	global.atob = decode;
}
const Stack = createNativeStackNavigator();

function App() {
	let [fontsLoaded] = useFonts({
		fontBold: require('./assets/fonts/NotoSansKR-Bold.otf'),
		fontRegular: require('./assets/fonts/NotoSansKR-Regular.otf'),
		fontThin: require('./assets/fonts/NotoSansKR-Thin.otf'),
	});

	if (!fontsLoaded) {
		return (
			<View style={[styles.container, styles.horizontal]}>
				<ActivityIndicator size={80} color="rgb(90, 90, 255)" />
			</View>
		);
	}
	return (
		<RecoilRoot>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="TabBottomNavigation" screenOptions={{ headerShown: true }}>
					<Stack.Screen
						options={{ headerShown: false }}
						name="TabBottomNavigation"
						component={TabBottomNavigation}
					/>
					<Stack.Screen
						options={navigationOptionCommunityAdd}
						name="CommunityAddRoute"
						component={CommunityCreateScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</RecoilRoot>
	);
}

const navigationOptionCommunityAdd: any = ({ navigation }: any) => {
	return {
		title: '글 작성',
		headerTitleAlign: 'center',
		headerTitleStyle: {
			color: 'rgb(37, 37, 37)',
			fontSize: 18,
			fontFamily: 'fontRegular',
		},
		headerStyle: {
			backgroundColor: '#fff',
		},
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 20,
	},
});

export default App;

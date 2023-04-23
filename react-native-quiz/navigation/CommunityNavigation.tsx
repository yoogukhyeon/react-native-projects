import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Community from '../screens/Community';
const Stack = createNativeStackNavigator();

function CommunityNavigation() {
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

export default CommunityNavigation;

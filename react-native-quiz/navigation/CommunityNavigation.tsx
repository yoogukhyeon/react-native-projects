import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommunityScreen from '../screens/community/CommunityScreen';

const Stack = createNativeStackNavigator();

function CommunityNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="CommunityRoute" component={CommunityScreen} />
		</Stack.Navigator>
	);
}

export default CommunityNavigation;

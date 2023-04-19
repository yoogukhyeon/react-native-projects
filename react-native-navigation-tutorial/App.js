import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './screens/Screen2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();

import BottomTabNavigation from './components/BottomTabNavigation';

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="NestedBottomTab" component={BottomTabNavigation} />
				<Stack.Screen name="Screen2" component={Screen2} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Screen1" component={Screen1} />
//         <Stack.Screen name="Screen2" component={Screen2} />
//         <Stack.Screen name="NestedNavigator" component={NestedStackNavigation} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

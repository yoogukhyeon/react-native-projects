import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityNavigation from './CommunityNavigation';
import QuizNavigation from './QuizNavigation';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabBottomNavigation() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					backgroundColor: 'rgb(9, 163, 52)',
				},

				tabBarActiveBackgroundColor: 'rgb(90, 90, 255);',
			}}
			initialRouteName="CommunityNavigation"
		>
			<Tab.Screen
				name="커뮤니티"
				component={CommunityNavigation}
				options={{
					headerTitleAlign: 'center',
					tabBarIcon: () => <Ionicons name="home" size={24} color="white" />,
					tabBarLabelStyle: { color: 'white', paddingBottom: 3 },
				}}
			/>
			<Tab.Screen
				name="퀴즈"
				component={QuizNavigation}
				options={{
					headerShown: false,
					tabBarIcon: () => <Ionicons name="settings" size={24} color="white" />,
					tabBarLabelStyle: { color: 'white', paddingBottom: 3 },
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabBottomNavigation;

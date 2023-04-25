import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityNavigation from './CommunityNavigation';
import QuizNavigation from './QuizNavigation';
import MyPageNavigation from './MyPageNavigation';
import { Ionicons } from '@expo/vector-icons';
import Icon from '../components/common/Icon';

const Tab = createBottomTabNavigator();

const tabBarIconOption = (focused: boolean, color: string, route: any) => {
	let iconName: string;
	if (route.name === 'Home') {
		iconName = focused ? 'home' : 'home-outline';
	} else if (route.name === 'Quiz') {
		iconName = focused ? 'game-controller' : 'game-controller-outline';
	} else if (route.name === 'My Page') {
		iconName = focused ? 'person' : 'person-outline';
	}

	return <Icon name={iconName} size={24} color={color} />;
};

function TabBottomNavigation() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarLabelStyle: {
					paddingBottom: 3,
				},
				tabBarStyle: {
					backgroundColor: '#fff',
					borderTopColor: '#fff',
				},
				tabBarIcon: ({ focused, color }) => {
					return tabBarIconOption(focused, color, route);
				},
				tabBarActiveTintColor: 'rgb(90, 90, 255)',
				tabBarInactiveTintColor: 'gray',
			})}
			initialRouteName="CommunityNavigation"
		>
			<Tab.Screen
				name="Home"
				component={CommunityNavigation}
				options={{
					headerTitleAlign: 'center',
				}}
			/>
			<Tab.Screen
				name="Quiz"
				component={QuizNavigation}
				options={{
					headerTitleAlign: 'center',
				}}
			/>
			<Tab.Screen
				name="My Page"
				component={MyPageNavigation}
				options={{
					headerTitleAlign: 'center',
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabBottomNavigation;

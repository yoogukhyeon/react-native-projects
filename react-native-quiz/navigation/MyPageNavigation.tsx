import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyPage from '../screens/MyPage';

const Stack = createNativeStackNavigator();

function MyPageNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="loginRoute" component={MyPage} />
		</Stack.Navigator>
	);
}

// const navigationOptionLogin: any = ({ navigation }: any) => {
// 	return {
// 		title: 'LOGIN',
// 		headerTitleAlign: 'center',
// 		headerTitleStyle: {
// 			color: 'rgb(37, 37, 37)',
// 			fontSize: 18,
// 			fontFamily: 'fontRegular',
// 		},
// 	};
// };

export default MyPageNavigation;

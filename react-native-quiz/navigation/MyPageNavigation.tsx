import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyPageScreen from '../screens/mypage/MyPageScreen';

const Stack = createNativeStackNavigator();

function MyPageNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="loginRoute" component={MyPageScreen} />
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

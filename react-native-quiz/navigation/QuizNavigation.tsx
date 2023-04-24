import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';

const Stack = createNativeStackNavigator();

function QuizNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="HomeRoute" component={Home} />
			<Stack.Screen name="QuizRoute" component={Quiz} />
			<Stack.Screen name="ResultRoute" component={Result} />
		</Stack.Navigator>
	);
}

// const navigationOptionHome: any = ({ navigation }: any) => {
// 	return {
// 		title: "Let's get started",
// 		headerTitleAlign: 'center',
// 		headerTitleStyle: {
// 			color: 'rgb(37, 37, 37)',
// 			fontSize: 18,
// 			fontFamily: 'fontRegular',
// 		},
// 	};
// };

// const navigationOptionQuiz: any = ({ navigation }: any) => {
// 	return {
// 		title: 'What is the answer?',
// 		headerTitleAlign: 'center',
// 		headerTitleStyle: {
// 			color: 'rgb(37, 37, 37)',
// 			fontSize: 18,
// 			fontFamily: 'fontRegular',
// 		},
// 	};
// };

// const navigationOptionResult: any = ({ navigation }: any) => {
// 	return {
// 		title: 'Quiz Result',
// 		headerTitleAlign: 'center',
// 		headerTitleStyle: {
// 			color: 'rgb(37, 37, 37)',
// 			fontSize: 18,
// 			fontFamily: 'fontRegular',
// 		},
// 	};
// };

export default QuizNavigation;

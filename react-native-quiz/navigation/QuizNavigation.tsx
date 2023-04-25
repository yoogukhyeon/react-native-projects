import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizMainScreen from '../screens/quiz/QuizMainScreen';
import QuizScreen from '../screens/quiz/QuizScreen';
import QuizResultScreen from '../screens/quiz/QuizResultScreen';

const Stack = createNativeStackNavigator();

function QuizNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="HomeRoute" component={QuizMainScreen} />
			<Stack.Screen name="QuizRoute" component={QuizScreen} />
			<Stack.Screen name="ResultRoute" component={QuizResultScreen} />
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

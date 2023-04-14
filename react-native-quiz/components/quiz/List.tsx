import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QuizWrap from '../common/QuizWrap';
import { Data, UserChk } from '../../screens/Quiz';
import NextBtn from './NextBtn';

interface IProps {
	number: number;
	data: Data;
	userChk: UserChk[];
	nextBtn: boolean;
	over: boolean;
	onPressProblem: (key: string) => void;
	onPressNext: () => void;
	onPressResult: () => void;
}

function List({ number, data, userChk, onPressProblem, onPressNext, onPressResult, over, nextBtn }: IProps) {
	return (
		<QuizWrap>
			<View style={styles.question}>
				<Text style={styles.quizTitle}>1. {data.question}</Text>
			</View>
			<View>
				{data.answer.map((item) => (
					<TouchableOpacity
						style={[
							styles.button,
							{
								backgroundColor:
									userChk[number]?.answer === item
										? 'linear-gradient(90deg, rgb(21, 243, 125), rgb(61, 196, 122))'
										: userChk[number]?.correctAnswer === item
										? 'linear-gradient(90deg, rgb(233, 50, 50), rgb(185, 92, 92));'
										: 'rgb(236, 236, 236);',
							},
						]}
						key={item}
						onPress={() => onPressProblem(item)}
						disabled={!!userChk[number]}
					>
						<Text style={styles.buttonText}>{item}</Text>
					</TouchableOpacity>
				))}

				{!!nextBtn && <NextBtn onPress={onPressNext} text="다음" />}

				{!!over && <NextBtn onPress={onPressResult} text="결과보기" />}
			</View>
		</QuizWrap>
	);
}

const styles = StyleSheet.create({
	question: {
		justifyContent: 'flex-start',
		width: '100%',
	},
	quizTitle: {
		fontSize: 18,
		lineHeight: 24,
		marginBottom: 20,
		fontWeight: 'bold',
	},
	button: {
		width: 300,
		height: 55,
		backgroundColor: 'rgb(236, 236, 236)',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
	},

	buttonText: {
		color: 'rgb(104, 104, 104)',
		fontWeight: '600',
		fontSize: 18,
	},
});

export default List;

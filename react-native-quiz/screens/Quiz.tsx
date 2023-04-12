import { useState } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Padding from '../components/common/Padding';
import SafeWrap from '../components/common/SafeWrap';
import ProgressBar from '../components/ProgressBar';

interface Data {
	questionNo: number;
	answer: string[];
	correct_answer: string;
	question: string;
}

const data: Data[] = [
	{
		questionNo: 1,
		answer: ['리버플', '토트넘', '맨시티', '맨유'],
		correct_answer: '맨유',
		question: '22-23 EPL 챔스 진출팀이 아닌 것은?',
	},
];
function Quiz({ navigation, route }: any) {
	const { query } = route.params;

	const [number, setNumber] = useState<number>(0);
	const [score, setScore] = useState<number>(0);
	const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
	const [nextBtn, setNextBtn] = useState<boolean>(false);

	const onPressProblem = (answer: string) => {
		console.log('answer :::', answer);
	};

	return (
		<SafeWrap>
			<Padding>
				<View>
					<Text>
						{score} / {data.length}
					</Text>
				</View>
				<View>
					<Text style={styles.quizTitle}>1. {data[number].question}</Text>
				</View>
				<View>
					{data[number].answer.map((item) => (
						<TouchableOpacity
							style={[
								styles.button,
								{
									backgroundColor:
										selectedProblem === data[number].questionNo
											? 'linear-gradient(90deg, rgb(21, 243, 125), rgb(61, 196, 122))'
											: selectedProblem !== null
											? 'linear-gradient(90deg, rgb(233, 50, 50), rgb(185, 92, 92));'
											: 'rgb(236, 236, 236);',
								},
							]}
							key={item}
							onPress={() => onPressProblem(item)}
							disabled={selectedProblem !== null && selectedProblem !== data[number].questionNo}
						>
							<Text style={styles.buttonText}>{item}</Text>
						</TouchableOpacity>
					))}
					{selectedProblem !== null && (
						<View style={{ width: '100%' }}>
							<Text>{`Problem ${selectedProblem}`}</Text>
						</View>
					)}

					{!!nextBtn && (
						<TouchableOpacity style={styles.nextBtn}>
							<Text style={styles.nextBtnText}>다음</Text>
							<Ionicons name="arrow-forward" size={24} color="white" />
						</TouchableOpacity>
					)}
				</View>
			</Padding>
			<ProgressBar />
		</SafeWrap>
	);
}

const styles = StyleSheet.create({
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
	nextBtn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 300,
		height: 55,
		backgroundColor: 'rgb(9, 163, 52)',
		borderRadius: 10,
		paddingHorizontal: 20,
	},
	nextBtnText: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 18,
	},
});

export default Quiz;

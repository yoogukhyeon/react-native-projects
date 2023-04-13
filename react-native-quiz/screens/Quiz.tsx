import React, { useCallback, useEffect, useState } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Padding from '../components/common/Padding';
import SafeWrap from '../components/common/SafeWrap';
import ProgressBar from '../components/quiz/ProgressBar';
import Margin from '../components/common/Margin';
import QuizWrap from '../components/common/QuizWrap';
import Info from '../components/quiz/Info';
import List from '../components/quiz/List';

export interface Data {
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
	{
		questionNo: 2,
		answer: ['긱스', '네드베드', '리베리', '네이마르'],
		correct_answer: '리베리',
		question: '발롱도르 드림팀 왼쪽 윙 후보에 들어간 인물은?',
	},
];

export interface UserChk {
	correct: boolean;
	answer: string;
	correctAnswer: string;
}

function Quiz({ navigation, route }: any) {
	const { query } = route.params;

	const [number, setNumber] = useState<number>(0);
	const [score, setScore] = useState<number>(0);
	const [userChk, setUserChk] = useState<UserChk[]>([]);
	const [nextBtn, setNextBtn] = useState<boolean>(false);
	const [over, setOver] = useState<boolean>(false);

	const onPressProblem = useCallback(
		(answer: string) => {
			const correct = data[number].correct_answer === answer;
			if (correct) setScore((prev) => prev + 1);

			const userChkObj = {
				correct,
				answer,
				correctAnswer: data[number].correct_answer,
			};

			setUserChk((prev) => [...prev, userChkObj]);

			if (number + 1 === data.length) {
				setOver(true);
			} else {
				setNextBtn(true);
			}
		},
		[userChk, number, score]
	);

	const onPressNext = () => {
		setNumber((prev) => prev + 1);
		setNextBtn(false);
	};

	const onPressResult = () => {
		//router 정리
		navigation.navigate('Result', { query: score });
	};

	const [progress, setProgress] = useState<number>();
	useEffect(() => {
		const percent = ((number + 1) / data.length) * 100;

		setProgress(percent);
	}, [number, over]);

	return (
		<SafeWrap>
			<Padding>
				<Info number={number} data={data} score={score} />
				<Margin style={{ marginVertical: 6 }} />
				<List
					number={number}
					data={data}
					userChk={userChk}
					nextBtn={nextBtn}
					over={over}
					onPressProblem={onPressProblem}
					onPressNext={onPressNext}
					onPressResult={onPressResult}
				/>
			</Padding>
			<ProgressBar progress={progress ?? 0} />
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

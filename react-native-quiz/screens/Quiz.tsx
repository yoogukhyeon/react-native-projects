import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';
import Padding from '../components/common/Padding';
import SafeWrap from '../components/common/SafeWrap';
import ProgressBar from '../components/quiz/ProgressBar';
import Margin from '../components/common/Margin';
import Info from '../components/quiz/Info';
import List from '../components/quiz/List';
import { useRecoilState, useRecoilValue } from 'recoil';
import { apiDataState } from '../api/store';
import { getQuizList } from '../api/services/api';

export interface Data {
	questionNo: number;
	answer: string[];
	correct_answer: string;
	question: string;
}

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

	const [apiData, setApiData] = useRecoilState<Data[]>(apiDataState);
	const data = useRecoilValue(getQuizList(query));
	useEffect(() => {
		setApiData(data);
	}, []);

	const onPressProblem = useCallback(
		(answer: string) => {
			const correct = apiData[number]?.correct_answer === answer;
			if (correct) setScore((prev) => prev + 1);

			const userChkObj = {
				correct,
				answer,
				correctAnswer: apiData[number]?.correct_answer,
			};

			setUserChk((prev) => [...prev, userChkObj]);

			if (number + 1 === apiData.length) {
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
		const percent = ((number + 1) / apiData?.length) * 100;

		setProgress(percent);
	}, [number, over, apiData]);

	return (
		<SafeWrap>
			<Padding>
				{apiData.length < 1 && (
					<View style={[styles.container, styles.horizontal]}>
						{Platform.OS === 'android' ? (
							<ActivityIndicator size={80} color="#0000ff" />
						) : (
							<ActivityIndicator size="large" color="#0000ff" />
						)}
					</View>
				)}
				{apiData.length > 0 && (
					<>
						<Info number={number} data={apiData} score={score} />
						<Margin style={{ marginVertical: 6 }} />
						<List
							number={number}
							data={apiData[number]}
							userChk={userChk}
							nextBtn={nextBtn}
							over={over}
							onPressProblem={onPressProblem}
							onPressNext={onPressNext}
							onPressResult={onPressResult}
						/>
					</>
				)}
			</Padding>
			<ProgressBar progress={progress ?? 0} />
		</SafeWrap>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 20,
	},
});

export default Quiz;

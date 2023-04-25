import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { Data } from '../../screens/quiz/QuizScreen';

interface IProps {
	number: number;
	data: Data[];
	score: number;
}

function Info({ number, data, score }) {
	return (
		<View style={styles.InfoWrap}>
			<Text style={[styles.InfoText, { paddingLeft: 4 }]}>
				{number + 1} / {data.length}
			</Text>
			<Text style={styles.InfoText}>score: {score}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	InfoWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	InfoText: {
		color: 'color: rgb(173, 167, 167)',
		fontSize: 18,
		lineHeight: 24,
	},
});

export default Info;

import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

interface IProps {
	children: React.ReactNode;
}
function QuizWrap({ children }: IProps) {
	return <View style={styles.quizWrap}>{children}</View>;
}

const styles = StyleSheet.create({
	quizWrap: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
	},
});

export default QuizWrap;

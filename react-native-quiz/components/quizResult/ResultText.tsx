import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text } from 'react-native';

interface IProps {
	style: any;
	children: React.ReactNode;
}

function ResultText({ style, children }: IProps) {
	return <Text style={[styles.Text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	Text: {
		textAlign: 'center',
		position: 'relative',
		borderRadius: 10,
		padding: 10,
		fontWeight: 'bold',
	},
});

export default ResultText;

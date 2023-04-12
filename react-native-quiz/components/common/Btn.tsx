import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface IProps {
	title: string;
	style?: StyleProp<ViewStyle>;
	active: boolean;
	isActive?: any;
	onPress: (key: number) => void;
	idx?: number;
}

function Btn({ title, style, active, isActive, idx, onPress }: IProps) {
	const defaultColor = 'rgb(230, 230, 240)';
	const activeColor = 'rgb(41, 41, 63)';
	const backgroundColor = isActive
		? isActive[idx] === idx
			? { backgroundColor: activeColor, flex: 1 }
			: { backgroundColor: defaultColor, flex: 1 }
		: style ?? { backgroundColor: defaultColor, flex: 1 };

	return (
		<TouchableOpacity
			activeOpacity={active ? 0.7 : 1}
			style={[styles.button, backgroundColor]}
			onPress={() => onPress(idx)}
		>
			<Text style={styles.txt}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		height: 60,
		lineHeight: 60,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},

	txt: {
		color: 'rgb(255, 255, 255)',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
export default Btn;

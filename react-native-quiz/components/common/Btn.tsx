import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IProps {
	title: string;
	style?: any;
	active: boolean;
	isActive?: any;
	onPress: (key: number) => void;
	idx?: number;
}

function Btn({ title, style, active, isActive, idx, onPress }: IProps) {
	return (
		<TouchableOpacity
			activeOpacity={active ? 0.7 : 1}
			style={[
				styles.button,
				{
					backgroundColor: isActive
						? isActive[idx] === idx
							? 'rgb(230, 230, 240)'
							: style ?? 'rgb(41, 41, 63)'
						: style ?? 'rgb(41, 41, 63)',
					flex: idx ? 1 : null,
				},
			]}
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

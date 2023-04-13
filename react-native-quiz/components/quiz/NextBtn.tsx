import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IProps {
	onPress: () => void;
	text: string;
}

function NextBtn({ text, onPress }: IProps) {
	return (
		<TouchableOpacity style={styles.nextBtn} onPress={onPress}>
			<Text style={styles.nextBtnText}>{text}</Text>
			<Ionicons name="arrow-forward" size={24} color="white" />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
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

export default NextBtn;

import Row from './common/Row';
import { TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default InputText = ({ inputText, setInputText, addItem }) => {
	return (
		<Row>
			<TextInput returnKeyType="send" style={styles.input} value={inputText} onChangeText={setInputText} />
			<TouchableOpacity onPress={addItem}>
				<Text style={styles.btn}>Send</Text>
			</TouchableOpacity>
		</Row>
	);
};

const styles = StyleSheet.create({
	input: {
		flex: 1,
		borderWidth: 1,
		paddingHorizontal: 7,
	},
	btn: {
		verticalAlign: 'middle',
		paddingHorizontal: 7,
	},
});

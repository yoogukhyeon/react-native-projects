import { Dispatch, useState } from 'react';
import { Platform, StyleProp, StyleSheet, TextInput, View } from 'react-native';
import CommunityTitle from './common/CommunityTitle';

interface IProps {
	text: string;
	style: any;
	placeholder: string;
	multiline: boolean;
	textAlignVertical: boolean;
	value: string;
	onChangeText: Dispatch<any>;
	onReset: Dispatch<any>;
}

const CustomInput = ({
	text,
	style,
	placeholder,
	multiline,
	textAlignVertical,
	value,
	onChangeText,
	onReset,
}: IProps) => {
	return (
		<View>
			<CommunityTitle
				text={text}
				style={Platform.OS === 'ios' ? { marginVertical: 10 } : { marginVertical: 5 }}
			/>
			<TextInput
				style={[styles.input, style]}
				placeholder={placeholder}
				multiline={multiline ? true : false}
				onChangeText={onChangeText}
				value={value}
				returnKeyType="done"
				textAlignVertical={Platform.OS === 'android' && textAlignVertical ? 'top' : 'center'}
			/>
		</View>
	);
};

//custom hooks
const useInput = (initialValue: any) => {
	const [value, setValue] = useState(initialValue);

	const resetValue = () => setValue(initialValue);

	return {
		value,
		setValue,
		resetValue,
	};
};

function CommunityCustomHooks() {
	const { value: title, setValue: setTitle, resetValue: resetTitle } = useInput('');
	const { value: content, setValue: setContent, resetValue: resetContent } = useInput('');

	return (
		<View>
			<CustomInput
				text="제목"
				style={{ height: 50 }}
				placeholder={'제목을 입력하세요.'}
				multiline={false}
				textAlignVertical={false}
				value={title}
				onChangeText={setTitle}
				onReset={() => setTitle('')}
			/>
			<CustomInput
				text="내용"
				style={{ height: 200 }}
				placeholder={'내용을 입력하세요.'}
				multiline={true}
				textAlignVertical={true}
				value={content}
				onChangeText={setContent}
				onReset={() => setContent('')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		width: 320,
		borderWidth: 3,
		borderColor: '#eee',
		borderRadius: 15,
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
});

export default CommunityCustomHooks;

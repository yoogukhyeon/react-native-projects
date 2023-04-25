import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface IProps {
	style: StyleProp<ViewStyle>;
	text: string;
}

function CommunityTitle({ style, text }: IProps) {
	return (
		<View style={[styles.textWrap, style]}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	textWrap: {},
	text: {
		fontFamily: 'fontBold',
		fontSize: 22,
	},
});

export default CommunityTitle;

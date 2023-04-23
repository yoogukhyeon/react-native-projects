import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface IProps {
	style: StyleProp<ViewStyle>;
}

function Divided({ style }: IProps) {
	return <View style={[styles.divided, style]}></View>;
}

const styles = StyleSheet.create({
	divided: {
		borderBottomColor: '#d2cfcf',
		borderBottomWidth: 1,
		flex: 1,
	},
});

export default Divided;

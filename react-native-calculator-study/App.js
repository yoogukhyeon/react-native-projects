import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './Calculator';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const barHeight = getStatusBarHeight();

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Calculator />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: barHeight,
	},
});

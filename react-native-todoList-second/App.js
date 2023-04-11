import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
const { statusBarHeight } = Constants;

import ZipCodeFinder from './screens/ZipCodeFinder';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ZipCodeFinder />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: statusBarHeight,
		flex: 1,
	},
});

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import FeedListItem from './components/FeedListItem';

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<FeedListItem
					image="https://docs.expo.dev/static/images/tutorial/background-image.png"
					likeCount={10}
					writer="yoogukhyeon"
					comment="this is test!!"
					isLiked={true}
					onPressFeed={() => {
						console.log('1213');
					}}
				/>
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

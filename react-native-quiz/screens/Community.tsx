import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import SafeWrap from '../components/common/SafeWrap';
// import Swiper from 'react-native-swiper';
import { useWindowDimensions } from 'react-native';
import CommunitySwiper from '../components/community/CommunitySwiper';

import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function Community() {
	const { width: WINDOW_WIDTH } = useWindowDimensions();

	useEffect(() => {
		const fetchData = async () => {
			await Font.loadAsync({
				fontBold: require('../assets/fonts/NotoSansKR-Bold.otf'),
				fontRegular: require('../assets/fonts/NotoSansKR-Regular.otf'),
			});
		};
		fetchData();
	}, []);

	return (
		<SafeWrap>
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* <View style={{ width: '100%', height: 300 }}>
					<CommunitySwiper />
				</View> */}

				<View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
					<Text style={{ fontFamily: 'fontBold', fontSize: 22, fontWeight: '700' }}>최신 소식</Text>
				</View>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ marginTop: 20, marginBottom: 20 }}
				>
					<View
						style={{
							width: 130,
							height: 130,
							marginLeft: 20,
							borderWidth: 0.5,
							borderColor: '#dddddd',
						}}
					>
						<View style={{ flex: 2 }}>
							<Image
								source={{ uri: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' }}
								style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
							/>
						</View>
						<View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
							<Text>Home</Text>
						</View>
					</View>
					<View
						style={{
							width: 130,
							height: 130,
							marginLeft: 20,
							borderWidth: 0.5,
							borderColor: '#dddddd',
						}}
					>
						<View style={{ flex: 2 }}>
							<Image
								source={{ uri: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' }}
								style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
							/>
						</View>
						<View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
							<Text>Home</Text>
						</View>
					</View>
					<View
						style={{
							width: 130,
							height: 130,
							marginLeft: 20,
							borderWidth: 0.5,
							borderColor: '#dddddd',
						}}
					>
						<View style={{ flex: 2 }}>
							<Image
								source={{ uri: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' }}
								style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
							/>
						</View>
						<View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
							<Text>Home</Text>
						</View>
					</View>
					<View
						style={{
							width: 130,
							height: 130,
							marginLeft: 20,
							borderWidth: 0.5,
							borderColor: '#dddddd',
						}}
					>
						<View style={{ flex: 2 }}>
							<Image
								source={{ uri: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' }}
								style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
							/>
						</View>
						<View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
							<Text>Home</Text>
						</View>
					</View>
					<View
						style={{
							width: 130,
							height: 130,
							marginLeft: 20,
							borderWidth: 0.5,
							borderColor: '#dddddd',
						}}
					>
						<View style={{ flex: 2 }}>
							<Image
								source={{ uri: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' }}
								style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
							/>
						</View>
						<View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
							<Text>Home</Text>
						</View>
					</View>
				</ScrollView>
				<View style={{ flex: 1, marginHorizontal: 20, marginBottom: 20 }}>
					<Text style={{ fontFamily: 'fontBold', fontSize: 22, fontWeight: '700' }}>인기 소식</Text>
				</View>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View
						style={{
							borderWidth: 1,
							borderColor: '#222',
							width: 170,
							height: 170,
							marginLeft: 20,
							marginBottom: 20,
						}}
					>
						<View></View>
						<View>
							<Text>테스트 입니다.</Text>
						</View>
					</View>
					<View
						style={{
							borderWidth: 1,
							borderColor: '#222',
							width: 170,
							height: 170,
							marginLeft: 20,
							marginBottom: 20,
						}}
					>
						<View></View>
						<View>
							<Text>테스트 입니다.</Text>
						</View>
					</View>
					<View
						style={{
							borderWidth: 1,
							borderColor: '#222',
							width: 170,
							height: 170,
							marginLeft: 20,
							marginBottom: 20,
						}}
					>
						<View></View>
						<View>
							<Text>테스트 입니다.</Text>
						</View>
					</View>
				</ScrollView>
			</ScrollView>
		</SafeWrap>
	);
}

const styles = StyleSheet.create({
	wrapper: {},
	slide1: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
	},
	slide2: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5',
	},
	slide3: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
});

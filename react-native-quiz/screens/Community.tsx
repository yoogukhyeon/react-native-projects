import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Padding from '../components/common/Padding';
import SafeWrap from '../components/common/SafeWrap';
// import Swiper from 'react-native-swiper';
import { useWindowDimensions } from 'react-native';
import CommunitySwiper from '../components/community/CommunitySwiper';

export default function Community() {
	const { width: WINDOW_WIDTH } = useWindowDimensions();

	return (
		<SafeWrap>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ width: '100%', height: 300 }}>
					<CommunitySwiper />
				</View>

				<View style={{ flex: 1 }}>
					<Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 20, paddingTop: 20 }}>
						최신 소식
					</Text>
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

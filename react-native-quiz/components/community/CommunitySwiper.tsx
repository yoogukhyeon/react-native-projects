import { View, StyleSheet, Image } from 'react-native';
import { useWindowDimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const swiper_style = {
	width: 10,
	height: 10,
	borderRadius: 50,
};

const data = [
	{
		url: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
	},
	{
		url: 'https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
	},
	{
		url: 'https://cdn.pixabay.com/photo/2018/11/14/13/05/mont-hwan-3815215__480.jpg',
	},
];

export default function CommunitySwiper() {
	const { width: WINDOW_WIDTH } = useWindowDimensions();
	return (
		<Swiper
			showsButtons={false}
			loop={true}
			autoplay={true}
			dotStyle={[swiper_style, { backgroundColor: '#eee', opacity: 0.8 }]}
			activeDotStyle={[swiper_style, { backgroundColor: 'rgb(9, 163, 52)' }]}
		>
			{data.map((val, idx) => (
				<View testID={val.url} style={styles.slide} key={idx}>
					<Image source={{ uri: val.url }} style={{ width: WINDOW_WIDTH, height: 300 }} />
				</View>
			))}
		</Swiper>
	);
}

const styles = StyleSheet.create({
	wrapper: {},
	slide: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
	},
});

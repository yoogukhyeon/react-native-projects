import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import SafeWrap from '../components/common/SafeWrap';
// import Swiper from 'react-native-swiper';
import { useWindowDimensions } from 'react-native';
import CommunitySwiper from '../components/community/CommunitySwiper';
import Padding from '../components/common/Padding';
import Divided from '../components/common/Divided';

export default function Community() {
	const { width: WINDOW_WIDTH } = useWindowDimensions();

	return (
		<SafeWrap>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, height: 200, paddingHorizontal: 20 }}>
					<CommunitySwiper />
				</View>

				<View style={{ flex: 1, marginHorizontal: 20, marginTop: 5 }}>
					<Text style={{ fontFamily: 'fontBold', fontSize: 22 }}>최신 소식</Text>
				</View>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View
						style={{
							width: 130,
							height: 130,
							marginLeft: 20,
							borderWidth: 0.5,
							borderColor: '#dddddd',
							borderRadius: 15,
							overflow: 'hidden',
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
							borderRadius: 15,
							overflow: 'hidden',
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
							borderRadius: 15,
							overflow: 'hidden',
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
							borderRadius: 15,
							overflow: 'hidden',
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
							borderRadius: 15,
							overflow: 'hidden',
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
				<View style={{ flex: 1, marginHorizontal: 20 }}>
					<Text style={{ fontFamily: 'fontBold', fontSize: 22 }}>인기 소식</Text>
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
							borderRadius: 15,
							overflow: 'hidden',
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
							borderRadius: 15,
							overflow: 'hidden',
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
							borderRadius: 15,
							overflow: 'hidden',
						}}
					>
						<View></View>
						<View>
							<Text>테스트 입니다.</Text>
						</View>
					</View>
				</ScrollView>
				<View style={{ flex: 1, marginHorizontal: 20 }}>
					<Text style={{ fontFamily: 'fontBold', fontSize: 22 }}>커뮤니티 글</Text>
				</View>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Padding>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'flex-start',
								gap: 15,
							}}
						>
							<View
								style={{
									flexGrow: 1,
									borderWidth: 1,
									borderColor: '#222',
									height: 80,
									borderRadius: 15,
								}}
							></View>
							<View style={{ flexGrow: 2, height: 80, justifyContent: 'space-between' }}>
								<Text>제목</Text>
								<Text style={{ flexGrow: 1 }}>내용입니다.</Text>
								<View>
									<Text>icon</Text>
								</View>
							</View>
						</View>
						<Divided style={{ marginVertical: 15 }} />
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'flex-start',
								gap: 15,
							}}
						>
							<View
								style={{
									flexGrow: 1,
									borderWidth: 1,
									borderColor: '#222',
									height: 80,
									borderRadius: 15,
								}}
							></View>
							<View style={{ flexGrow: 2, height: 80, justifyContent: 'space-between' }}>
								<Text>제목</Text>
								<Text style={{ flexGrow: 1 }}>내용입니다.</Text>
								<View>
									<Text>icon</Text>
								</View>
							</View>
						</View>
						<Divided style={{ marginVertical: 15 }} />
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'flex-start',
								gap: 15,
							}}
						>
							<View
								style={{
									flexGrow: 1,
									borderWidth: 1,
									borderColor: '#222',
									height: 80,
									borderRadius: 15,
								}}
							></View>
							<View style={{ flexGrow: 2, height: 80, justifyContent: 'space-between' }}>
								<Text>제목</Text>
								<Text style={{ flexGrow: 1 }}>내용입니다.</Text>
								<View>
									<Text>icon</Text>
								</View>
							</View>
						</View>
						<Divided style={{ marginVertical: 15 }} />
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'flex-start',
								gap: 15,
							}}
						>
							<View
								style={{
									flexGrow: 1,
									borderWidth: 1,
									borderColor: '#222',
									height: 80,
									borderRadius: 15,
								}}
							></View>
							<View style={{ flexGrow: 2, height: 80, justifyContent: 'space-between' }}>
								<Text>제목</Text>
								<Text style={{ flexGrow: 1 }}>내용입니다.</Text>
								<View>
									<Text>icon</Text>
								</View>
							</View>
						</View>
					</Padding>
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

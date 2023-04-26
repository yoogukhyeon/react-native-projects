import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	FlatList,
	ActivityIndicator,
	Platform,
	TouchableOpacity,
} from 'react-native';
import SafeWrap from '../../components/common/SafeWrap';
import { useWindowDimensions } from 'react-native';
import CommunitySwiper from '../../components/community/CommunitySwiper';
import Padding from '../../components/common/Padding';
import Divided from '../../components/common/Divided';
import { useEffect, useState } from 'react';
import { data } from '../../data';
import CommunityTitle from '../../components/community/common/CommunityTitle';
import Icon from '../../components/common/Icon';
import { useRecoilState, useRecoilValue } from 'recoil';
import { apiNewsDataState } from '../../api/store';
import { getNewsList } from '../../api/services/api';
import RenderHtml from 'react-native-render-html';
export interface NewsData {
	title: string;
	originallink: string;
	description: string;
	link: string;
	pubDate: string;
}

export default function CommunityScreen({ navigation }) {
	const { width: WINDOW_WIDTH } = useWindowDimensions();

	// const [apiNewsData, setApiNewsData] = useRecoilState<NewsData[]>(apiNewsDataState);
	// const newsData = useRecoilValue(getNewsList('축구'));

	const [arrSlice, setArrSlice] = useState<number>(3);
	const [loading, setLoading] = useState<boolean>(false);
	const [over, setOver] = useState<boolean>(true);

	const getData = () => {
		setLoading(true);
		setArrSlice((perv) => perv + 3);
		setLoading(false);
	};

	const onEndReached = () => {
		if (arrSlice > data.length) {
			setArrSlice(data.length);
			setOver(false);
		} else {
			getData();
		}
	};

	// useEffect(() => {
	// 	setApiNewsData(newsData);
	// }, []);
	// console.log(':::::::::::::::::::::', apiNewsData);
	return (
		<SafeWrap>
			<View style={{ flex: 1, width: '100%' }}>
				<Padding>
					<FlatList
						onEndReached={onEndReached}
						onEndReachedThreshold={0.4}
						ListFooterComponent={loading && over && Loading}
						showsVerticalScrollIndicator={false}
						data={data.slice(0, arrSlice)}
						ListHeaderComponent={<HeaderComponent navigation={navigation} />}
						renderItem={({ item }: any) => <List title={item.title} content={item.content} />}
						keyExtractor={(item) => String(item.id)}
						ItemSeparatorComponent={() => <Divided style={{ marginVertical: 15 }} />}
					/>
				</Padding>
			</View>
		</SafeWrap>
	);
}

const tagsStyles: any = {
	body: {
		whiteSpace: 'normal',
		height: 50,
		lineHeight: 24,
	},
};

const HeaderComponent = ({ navigation }) => {
	const goToAdd = () => {
		navigation.navigate('CommunityAddRoute');
	};
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{ flex: 1, height: 200 }}>
				<CommunitySwiper />
			</View>
			<CommunityTitle
				text={'최신 소식'}
				style={Platform.OS === 'ios' ? { marginVertical: 15 } : { marginTop: 5 }}
			/>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<View
					style={{
						width: 130,
						height: 130,

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
			<CommunityTitle text={'인기 소식'} style={Platform.OS === 'ios' && { marginVertical: 15 }} />
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<View
					style={{
						borderWidth: 1,
						borderColor: '#222',
						width: 230,
						height: 240,
						marginBottom: 20,
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
					<View
						style={{
							flex: 1,
							justifyContent: 'space-between',
							gap: 5,
							paddingHorizontal: 7,
							paddingVertical: 7,
						}}
					>
						<RenderHtml
							contentWidth={200}
							source={{
								html: `클린스만 <b>축구</b>대표팀 감독 &quot;김민재와 만남 매우 긍정적&quot; 클린스만 <b>축구</b>대표팀 감독 &quot;김민재와 만남 매우 긍정적&quot; 클린스만 <b>축구</b>대표팀 감독 &quot;김민재와 만남 매우 긍정적&quot; 클린스만 <b>축구</b>대표팀 감독 &quot;김민재와 만남 매우 긍정적&quot; 클린스만 <b>축구</b>대표팀 감독 &quot;김민재와 만남 매우 긍정적&quot;`,
							}}
							tagsStyles={tagsStyles}
						/>

						<Text>2023.04.06</Text>
					</View>
				</View>
				<View
					style={{
						borderWidth: 1,
						borderColor: '#222',
						width: 150,
						height: 150,
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
						width: 150,
						height: 150,
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
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<CommunityTitle text={'커뮤니티 글'} style={Platform.OS === 'ios' && { marginVertical: 15 }} />
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
					<TouchableOpacity hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}>
						<Icon name="list" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity onPress={goToAdd} hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}>
						<Icon name="add" size={24} color="black" />
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const Loading = () => {
	return (
		<View style={{ flex: 1, paddingVertical: 5 }}>
			<ActivityIndicator size="large" color="rgb(90, 90, 255)" />
		</View>
	);
};

const List = ({ title, content }) => {
	return (
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
				<Text>{title}</Text>
				<Text style={{ flexGrow: 1 }}>{content}</Text>
				<View>
					<Text>icon</Text>
				</View>
			</View>
		</View>
	);
};

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

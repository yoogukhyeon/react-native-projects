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
import React, { useEffect, useState } from 'react';
import { testData } from '../../data';
import CommunityTitle from '../../components/community/common/CommunityTitle';
import Icon from '../../components/common/Icon';
import { useRecoilState, useRecoilValue } from 'recoil';
import { apiNewsDataState } from '../../api/store';
import { getNewsList } from '../../api/services/api';

export interface NewsData {
	title: string;
	originallink: string;
	description: string;
	link: string;
	pubDate: string;
}

export default function CommunityScreen({ navigation }) {
	const { width: WINDOW_WIDTH } = useWindowDimensions();

	const [arrSlice, setArrSlice] = useState<number>(3);
	const [loading, setLoading] = useState<boolean>(false);
	const [over, setOver] = useState<boolean>(true);

	const [apiNewsData, setApiNewsData] = useRecoilState<NewsData[]>(apiNewsDataState);
	const data = useRecoilValue(getNewsList('축구'));
	useEffect(() => {
		setApiNewsData(data);
	}, []);

	console.log('apiNewsData ::', apiNewsData);
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

	return (
		<SafeWrap>
			<View style={{ flex: 1, width: '100%' }}>
				<Padding>
					<FlatList
						onEndReached={onEndReached}
						onEndReachedThreshold={0.4}
						ListFooterComponent={loading && over && <Loading />}
						showsVerticalScrollIndicator={false}
						data={testData.slice(0, arrSlice)}
						ListHeaderComponent={<HeaderComponent navigation={navigation} apiNewsData={apiNewsData} />}
						renderItem={({ item }: any) => <List title={item.title} content={item.content} />}
						keyExtractor={(item) => String(item.id)}
						ItemSeparatorComponent={() => <Divided style={{ marginVertical: 15 }} />}
					/>
				</Padding>
			</View>
		</SafeWrap>
	);
}

const HeaderComponent = ({ navigation, apiNewsData }: any) => {
	const goToAdd = () => {
		navigation.navigate('CommunityAddRoute');
	};
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{/* <View style={{ flex: 1, height: 200 }}>
				<CommunitySwiper />
			</View> */}
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
				{apiNewsData?.map((val: any, idx: number) => (
					<View
						style={{
							borderWidth: 1,
							borderColor: '#222',
							width: 230,
							height: 240,
							marginBottom: 20,
							borderRadius: 15,
							overflow: 'hidden',
							marginLeft: 20,
						}}
						key={idx}
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
							<Text style={{ fontSize: 14, lineHeight: 20 }} numberOfLines={2} ellipsizeMode="tail">
								{val.title}
							</Text>
							<Text>{val.pubDate}</Text>
						</View>
					</View>
				))}
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

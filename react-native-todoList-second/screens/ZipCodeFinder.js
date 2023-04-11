import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Padding from '../components/common/Padding';
import axios from 'axios';
import Row from '../components/common/Row';
import { useCallback, useEffect, useState } from 'react';
import AddressItem from '../components/zipcode/AddressItem';

export default ZipCodeFinder = () => {
	const [keyword, setKeyword] = useState('');
	const [list, setList] = useState([]);
	const search = useCallback(() => {
		axios
			.get('https://business.juso.go.kr/addrlink/addrLinkApi.do', {
				params: {
					confmKey: 'devU01TX0FVVEgyMDIzMDQxMTEyMDMxMjExMzY3NTU=',
					currentPage: 1,
					countPerPage: 50,
					keyword,
					resultType: 'json',
				},
			})
			.then((res) => {
				setList(res.data.results.juso);
			})
			.catch((err) => console.log('Error', err));
	}, [keyword, list]);

	useEffect(() => {}, []); // 첫화면 렌더링 시에만 코드실행

	return (
		<Padding style={{ flex: 1 }}>
			<Row style={{ marginBottom: 10 }}>
				<TextInput
					value={keyword}
					onChangeText={setKeyword}
					style={{ flex: 1, borderWidth: 1, paddingHorizontal: 10 }}
				/>
				<TouchableOpacity onPress={search}>
					<Text>검색</Text>
				</TouchableOpacity>
			</Row>
			<FlatList
				data={list}
				renderItem={({ item }) => <AddressItem item={item} />}
				keyExtractor={(item) => item.rnMgtSn + item.roadAddr}
				style={{ flex: 1 }}
			/>
		</Padding>
	);
};

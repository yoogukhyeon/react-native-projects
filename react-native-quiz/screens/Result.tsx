import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Image, Text, View } from 'react-native';
import SafeWrap from '../components/common/SafeWrap';
import Padding from '../components/common/Padding';
import ResultBox from '../components/result/ResultBox';

function Result({ navigation, route }: any) {
	const { query } = route.params;
	const [result, setResult] = useState<number>(0);
	useEffect(() => {
		setResult(query);
	}, [query]);
	return (
		<SafeWrap>
			<Padding>
				<ResultBox result={result} navigation={navigation} />
			</Padding>
		</SafeWrap>
	);
}

export default Result;

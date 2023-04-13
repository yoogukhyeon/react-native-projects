import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Image, Text, View } from 'react-native';
import Margin from '../components/common/Margin';
import Padding from '../components/common/Padding';
import SafeWrap from '../components/common/SafeWrap';
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
				<ResultBox result={result} />
			</Padding>
		</SafeWrap>
	);
}

export default Result;

import { Image, Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Margin from '../common/Margin';
import NextBtn from '../quiz/NextBtn';
import ResultText from './ResultText';

interface IProps {
	result: number;
	navigation: any;
}
function ResultBox({ result, navigation }: IProps) {
	const onPressHome = () => {
		navigation.navigate('Home');
	};
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Image
				source={require('../../assets/images/result.jpg')}
				style={{
					width: 250,
					height: 250,
					borderRadius: 15,
				}}
			/>

			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Margin style={{ marginVertical: 25 }} />
				<View style={{ backgroundColor: 'rgb(9, 163, 52)', width: '100%', height: 3 }}></View>
				<ResultText
					style={{
						color: '#000',
						fontSize: 24,
						top: -35,
						backgroundColor: '#fff',
						lineHeight: 30,
					}}
				>
					정답 {'\n'}
					{result}
				</ResultText>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ backgroundColor: 'rgb(9, 163, 52)', opacity: 0.7, width: 50, height: 10 }}></Text>
				<ResultText
					style={{
						color: '#000',
						fontSize: 18,
						top: -34,
						lineHeight: 26,
					}}
				>
					조언
				</ResultText>

				<Text style={{ backgroundColor: 'rgb(9, 163, 52)', opacity: 0.6, width: '100%', height: 10 }}></Text>
				<ResultText
					style={{
						color: 'rgb(9, 163, 52)',
						fontSize: 22,
						top: -38,
						lineHeight: 28,
					}}
				>
					{result < 6 ? '공부를 더 하세요....' : '오호 똑똑하시네요!!!'}
				</ResultText>

				<TouchableOpacity style={styles.nextBtn} onPress={onPressHome}>
					<Text style={styles.nextBtnText}>퀴즈 다시 하러 가기</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	nextBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 55,
		backgroundColor: 'rgba(142, 202, 159, 0.424)',
		borderRadius: 10,
		paddingHorizontal: 20,
	},
	nextBtnText: {
		color: 'rgb(9, 163, 52)',
		fontWeight: '600',
		fontSize: 18,
	},
});

export default ResultBox;

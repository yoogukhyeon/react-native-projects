import { View, Image } from 'react-native';
import Margin from '../components/common/Margin';
import styled from 'styled-components/native';

function Main() {
	return (
		<>
			<Image source={require('../assets/images/home.png')} style={{ width: 200, height: 200 }} />
			<Margin style="5" />
			<View>
				<QuizTitle>축구 지식 퀴즈?</QuizTitle>
				<Margin style="5" />
				<QuizText>
					지식이란? {'\n'}
					배워서 이해하고 알아가면서 익히는 지식은
					{'\n'}
					같은 분야에 종사하지 않는 한 졸업하면 잊는다.
					{'\n'}
					지식은 시험이 끝나면 두뇌에서 사라진다. 따라서
					{'\n'}
					배운 지식을 배운 대로 떠드는 것은 개 짖는 소리와
					{'\n'}
					다를 바 없다.
					{'\n'}
					{'\n'}
					문제에 답을 고르시면 됩니다.
				</QuizText>
			</View>
		</>
	);
}

const QuizTitle = styled.Text`
	color: rgb(37, 37, 37);
	font-size: 28px;
	font-weight: 900;
`;

const QuizText = styled.Text`
	font-size: 15px;
	font-weight: 500;
	color: rgb(150, 144, 144);
`;
export default Main;

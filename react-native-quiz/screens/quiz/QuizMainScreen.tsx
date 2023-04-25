import { ScrollView, View } from 'react-native';
import Padding from '../../components/common/Padding';
import Main from '../../components/quizMain/Main';
import Margin from '../../components/common/Margin';
import ButtonBox from '../../components/quizMain/ButtonBox';
import SafeWrap from '../../components/common/SafeWrap';

function QuizMainScreen({ navigation }: any) {
	return (
		<SafeWrap>
			<Padding>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Main />
					</View>
					<Margin style={{ marginVertical: 15 }} />
					<ButtonBox navigation={navigation} />
				</ScrollView>
			</Padding>
		</SafeWrap>
	);
}

export default QuizMainScreen;

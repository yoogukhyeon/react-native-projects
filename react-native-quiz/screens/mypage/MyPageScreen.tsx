import { Text, View } from 'react-native';
import Padding from '../../components/common/Padding';
import SafeWrap from '../../components/common/SafeWrap';

function MyPageScreen() {
	return (
		<SafeWrap>
			<Padding>
				<View>
					<Text>login</Text>
				</View>
			</Padding>
		</SafeWrap>
	);
}

export default MyPageScreen;

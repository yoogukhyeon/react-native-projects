import { View } from 'react-native';
import Padding from '../components/common/Padding';
import Main from '../components/main/Main';

import Margin from '../components/common/Margin';
import ButtonBox from '../components/main/ButtonBox';
import SafeWrap from '../components/common/SafeWrap';

function Home({ navigation }: any) {
	return (
		<SafeWrap>
			<Padding>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Main />
				</View>
				<Margin style={{ marginVertical: 15 }} />
				<ButtonBox navigation={navigation} />
			</Padding>
		</SafeWrap>
	);
}

export default Home;

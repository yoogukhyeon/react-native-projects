import { View } from 'react-native';
import Padding from '../components/common/Padding';
import Main from '../components/Main';

import Margin from '../components/common/Margin';
import ButtonBox from '../components/ButtonBox';
import Wrap from '../components/common/Wrap';

function Home({ navigation }: any) {
	return (
		<Wrap>
			<Padding>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Main />
				</View>
				<Margin style={7} />
				<ButtonBox navigation={navigation} />
			</Padding>
		</Wrap>
	);
}

export default Home;

import { Text, View } from 'react-native';
import { Header } from '../components/Header/Header';

export const MyPageScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header>
				<Header.Title title="MY PAGE" />
			</Header>
		</View>
	);
};

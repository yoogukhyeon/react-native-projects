import { Text, View, Platform } from 'react-native';
import styled from 'styled-components/native';

function ProgressBar() {
	return (
		<ProgressWrap>
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
				{Platform.OS === 'web' ? <ProgressWeb /> : <Progress />}
				<Text style={{ color: '#fff' }}>10%</Text>
			</View>
		</ProgressWrap>
	);
}

const ProgressWrap = styled.View`
	background-color: #222;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 80px;
`;

const ProgressWeb = styled.Text`
	color: #fff;
	width: 300px;
	height: 4px;
	background: rgb(236, 236, 236);
`;

const Progress = styled.Text`
	color: #fff;
	flex: 1;
	height: 4px;
	background: rgb(236, 236, 236);
`;

export default ProgressBar;

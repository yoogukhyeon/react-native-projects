import { Text, View, Platform } from 'react-native';
import styled from 'styled-components/native';

interface IProps {
	progress: number;
}

function ProgressBar({ progress }: IProps) {
	return (
		<ProgressWrap>
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
				{Platform.OS === 'web' ? (
					<ProgressWeb>
						<Text
							style={{ width: `${progress ?? 0}%`, backgroundColor: 'rgb(9, 163, 52)', height: 10 }}
						></Text>
					</ProgressWeb>
				) : (
					<Progress>
						<Text style={{ width: `${progress ?? 0}%`, backgroundColor: 'rgb(9, 163, 52)' }}></Text>
					</Progress>
				)}
				<Text style={{ color: '#fff' }}>{progress}%</Text>
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

const ProgressWeb = styled.View`
	color: #fff;
	width: 300px;
	height: 4px;
	background: rgb(236, 236, 236);
`;

const Progress = styled.View`
	color: #fff;
	flex: 1;
	height: 4px;
	background: rgb(236, 236, 236);
`;

export default ProgressBar;

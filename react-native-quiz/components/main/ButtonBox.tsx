import Btn from '../common/Btn';
import styled from 'styled-components/native';
import { useState } from 'react';
import Border from '../common/Border';

import { Alert, Platform } from 'react-native';

function ButtonBox({ navigation }: any) {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [activeIdx, setActiveIdx] = useState<any>(null);
	const [activeQuery, setActiveQuery] = useState<number>(0);

	const onPress = (idx: number) => {
		setIsActive((prev) => !prev);
		setActiveIdx({
			[idx]: idx,
			isActive: isActive,
		});
		setActiveQuery(idx);
	};

	const onPressTest = () => {
		if (!activeIdx) {
			if (Platform.OS === 'web') return alert('퀴즈 유형을 선택해주세요.');
			return Alert.alert('요청', '퀴즈 유형을 선택해주세요.');
		}

		//router 정리
		navigation.navigate('Quiz', { query: activeQuery });
	};

	return (
		<>
			<ButtonContainer>
				<Btn title="축구퀴즈1" active={false} idx={1} isActive={activeIdx} onPress={onPress} />
				<Btn title="축구퀴즈2" active={false} idx={2} isActive={activeIdx} onPress={onPress} />
			</ButtonContainer>
			<Border />
			<Btn
				title="테스트 하러가기"
				active={true}
				onPress={onPressTest}
				style={{ backgroundColor: 'rgb(9, 163, 52)' }}
			/>
		</>
	);
}

const ButtonContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
`;
export default ButtonBox;

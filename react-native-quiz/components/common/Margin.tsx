import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

interface IProps {
	style: string | any;
}

function Margin({ style }: IProps) {
	return <MarginWrap style={style} />;
}

const MarginWrap = styled.View<any>`
	margin: ${({ style }) => style}px 0;
`;

export default Margin;

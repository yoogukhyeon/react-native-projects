import React from 'react';

import styled from 'styled-components/native';

interface IProps {
	children: React.ReactNode;
}

function Padding({ children }: IProps) {
	return <PaddingWrap>{children}</PaddingWrap>;
}

const PaddingWrap = styled.View`
	padding: 20px;
	flex: 1;
`;

export default Padding;

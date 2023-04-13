import React from 'react';

import styled from 'styled-components/native';

function Border() {
	return <BorderWrap />;
}

const BorderWrap = styled.View`
	background-color: #eee;
	height: 2px;
	margin: 20px 0;
`;

export default Border;

import React from 'react';
import { View } from 'react-native';

interface IProps {
	children: React.ReactNode;
}

function Padding({ children }: IProps) {
	return <View style={{ paddingHorizontal: 20, paddingVertical: 20, flex: 1 }}>{children}</View>;
}

export default Padding;

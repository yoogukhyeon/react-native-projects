import React from 'react';
import { SafeAreaView } from 'react-native';

interface IProps {
	children: React.ReactNode;
}

function SafeWrap({ children }: IProps) {
	return <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>{children}</SafeAreaView>;
}

export default SafeWrap;

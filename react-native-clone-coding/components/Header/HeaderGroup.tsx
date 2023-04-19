import React, { ReactElement } from 'react';
import { View } from 'react-native';

interface IProps {
	children: ReactElement[];
}

export const HeaderGroup = ({ children }: IProps) => {
	return <View style={{ flexDirection: 'row', alignItems: 'center' }}>{children}</View>;
};

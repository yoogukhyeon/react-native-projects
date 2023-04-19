import React from 'react';
import { View } from 'react-native';

interface IProps {
	horizontal?: boolean;
	space: number;
}

export const Spacer = ({ horizontal, space }: IProps) => {
	if (horizontal) {
		return <View style={{ marginLeft: space }} />;
	}

	return <View style={{ marginTop: space }} />;
};

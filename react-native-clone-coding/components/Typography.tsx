import React from 'react';
import { Text } from 'react-native';

interface IProps {
	color?: string;
	fontSize?: number;
	numberOfLines?: number;
	children: React.ReactElement | string | React.ReactElement[];
}

export const Typography = ({ color, fontSize, numberOfLines, children }: IProps) => {
	return (
		<Text
			style={{
				color: color ?? 'black',
				fontSize: fontSize ?? 10,
			}}
			numberOfLines={numberOfLines}
		>
			{children}
		</Text>
	);
};

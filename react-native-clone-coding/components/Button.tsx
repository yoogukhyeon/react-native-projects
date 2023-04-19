import React, { ReactElement } from 'react';
import { Pressable } from 'react-native';

interface IProps {
	onPress: () => void;
	onPressIn?: () => void;
	onPressOut?: () => void;
	hitSlop?: { left: number; right: number; top: number; bottom: number };
	backgroundColor?: string;
	paddingHorizontal?: number;
	paddingVertical?: number;
	children: ReactElement | ReactElement[];
}

export const Button = ({
	onPress,
	onPressIn,
	onPressOut,
	hitSlop,
	backgroundColor,
	paddingHorizontal,
	paddingVertical,
	children,
}: IProps) => {
	return (
		<Pressable
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			onPress={onPress}
			hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
			style={{
				backgroundColor: backgroundColor,
				paddingHorizontal: paddingHorizontal,
				paddingVertical: paddingVertical,
			}}
		>
			{children}
		</Pressable>
	);
};

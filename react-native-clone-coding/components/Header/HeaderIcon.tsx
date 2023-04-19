import React from 'react';
import { Button } from '../Button';
import { Icon, IconName } from '../Icons';

interface IProps {
	onPress: () => void;
	iconName: IconName;
}

export const HeaderIcon = ({ onPress, iconName }: IProps) => {
	return (
		<Button onPress={onPress}>
			<Icon name={iconName} size={28} color="black" />
		</Button>
	);
};

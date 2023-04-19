import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export type IconName = keyof typeof Ionicons.glyphMap;

interface IProps {
	name: IconName;
	size: number;
	color: string;
}

export const Icon = ({ name, size, color }: IProps) => {
	return <Ionicons name={name} size={size} color={color} />;
};

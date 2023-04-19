import React from 'react';
import { Typography } from '../Typography';

interface IProps {
	title: string;
}

export const HeaderTitle = ({ title }: IProps) => {
	return (
		<Typography fontSize={18} numberOfLines={1}>
			{title}
		</Typography>
	);
};

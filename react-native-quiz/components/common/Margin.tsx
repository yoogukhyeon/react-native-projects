import React from 'react';
import { StyleProp } from 'react-native';
import { View, ViewStyle } from 'react-native';

interface IProps {
	style: StyleProp<ViewStyle>;
}

function Margin({ style }: IProps) {
	return <View style={[style]}></View>;
}

export default Margin;

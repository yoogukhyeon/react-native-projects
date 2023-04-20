import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface IProps {
	style: StyleProp<ViewStyle>;
}

function Margin({ style }: IProps) {
	return <View style={[style]}></View>;
}

export default Margin;

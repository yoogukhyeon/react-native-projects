import { StyleSheet, View } from 'react-native';

export default Padding = ({ children, padding, style }) => {
	return (
		<View style={[{ paddingHorizontal: padding ?? 20, paddingVertical: padding ?? 20 }, style]}>{children}</View>
	);
};

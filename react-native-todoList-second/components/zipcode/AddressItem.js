import { Text, View, StyleSheet } from 'react-native';

export default AddressItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<Text>
				[{item.zipNo}] {item.roadAddr}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 8,
		borderBottomColor: '#777',
		borderBottomWidth: 1,
	},
});

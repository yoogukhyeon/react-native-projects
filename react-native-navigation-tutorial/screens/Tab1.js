import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';
import data from '../data/data';
import Animated, {
	useSharedValue,
	useAnimatedScrollHandler,
	useAnimatedRef,
	useAnimatedStyle,
	interpolate,
	Extrapolate,
} from 'react-native-reanimated';
import Pagination from '../components/Pagination';
import CustomButton from '../components/CustomButton';

function Tab1() {
	const { width } = useWindowDimensions();
	const flatListRef = useAnimatedRef(null);
	const x = useSharedValue(0);
	const flatListIndex = useSharedValue(0);

	const onViewableItemsChanged = ({ viewableItems }) => {
		flatListIndex.value = viewableItems[0].index;
	};

	const onScroll = useAnimatedScrollHandler({
		onScroll: (event) => {
			x.value = event.contentOffset.x;
		},
	});
	const RenderItem = ({ item, index }) => {
		const imaeAnimationStyle = useAnimatedStyle(() => {
			const opacityAnimation = interpolate(
				x.value,
				[(index - 1) * width, index * width, (index + 1) * width],
				[0, 1, 0],
				Extrapolate.CLAMP
			);
			const translateYanimation = interpolate(
				x.value,
				[(index - 1) * width, index * width, (index + 1) * width],
				[100, 0, 100],
				Extrapolate.CLAMP
			);
			return {
				opacity: opacityAnimation,
				width: width * 0.8,
				height: width * 0.8,
				transform: [{ translateY: translateYanimation }],
			};
		});

		const textAnimationStyle = useAnimatedStyle(() => {
			const opacityAnimation = interpolate(
				x.value,
				[(index - 1) * width, index * width, (index + 1) * width],
				[0, 1, 0],
				Extrapolate.CLAMP
			);
			const translateYanimation = interpolate(
				x.value,
				[(index - 1) * width, index * width, (index + 1) * width],
				[100, 0, 100],
				Extrapolate.CLAMP
			);
			return {
				opacity: opacityAnimation,
				transform: [{ translateY: translateYanimation }],
			};
		});
		return (
			<View style={[styles.itemContainer, { width: width }]}>
				<Animated.Image source={item.image} style={imaeAnimationStyle} />
				<Animated.View style={textAnimationStyle}>
					<Text style={styles.itemTitle}>{item.title}</Text>
					<Text style={styles.itemText}>{item.text}</Text>
				</Animated.View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Animated.FlatList
				ref={flatListRef}
				onScroll={onScroll}
				data={data}
				renderItem={({ item, index }) => {
					return <RenderItem item={item} index={index} />;
				}}
				keyExtractor={(item) => item.id}
				scrollEventThrottle={16}
				horizontal={true}
				bounces={false}
				pagingEnabled={true}
				showsHorizontalScrollIndicator={false}
				onViewableItemsChanged={onViewableItemsChanged}
			/>
			<View style={styles.bottomContainer}>
				<Pagination data={data} x={x} screenWidth={width} />
				<CustomButton flatListRef={flatListRef} flatListIndex={flatListIndex} dataLength={data.length} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8e9b0',
	},
	itemContainer: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#f8e9b0',
	},
	itemTitle: {
		color: 'black',
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
	itemText: {
		color: 'black',
		textAlign: 'center',
		lineHeight: 20,
		marginHorizontal: 35,
	},
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 20,
		marginVertical: 20,
	},
});

export default Tab1;

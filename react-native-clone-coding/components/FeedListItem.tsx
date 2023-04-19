import { View, Text, useWindowDimensions } from 'react-native';
import { Button } from './Button';
import { Icon } from './Icon';
import { RemoteImage } from './RemoteImage';
import { Spacer } from './Spacer';
import { Typography } from './Typography';

interface IProps {
	image: string;
	likeCount: number;
	isLiked: boolean;
	writer: string;
	comment: string;
	onPressFeed: () => void;
}

export default function FeedListItem({ image, likeCount, isLiked, writer, comment, onPressFeed }: IProps) {
	const { width } = useWindowDimensions();
	return (
		<Button onPress={onPressFeed}>
			<RemoteImage url={image} width={width} height={width} />

			<View style={{ paddingHorizontal: 12, paddingVertical: 6 }}>
				<Icon name={isLiked ? 'heart' : 'heart-outline'} size={20} color={isLiked ? 'red' : 'black'} />
			</View>

			<View style={{ paddingHorizontal: 12 }}>
				<Typography fontSize={16}>{`좋아요 ${likeCount}`}</Typography>
				<Spacer space={4} />
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Typography fontSize={16}>{writer}</Typography>
					<Spacer space={8} horizontal />
					<Typography fontSize={16}>{comment}</Typography>
				</View>
			</View>
		</Button>
	);
}

import { Button, Image, StyleSheet, Text, View, Pressable, Alert, TextInput, Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SafeWrap from '../../components/common/SafeWrap';
import Padding from '../../components/common/Padding';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CommunityCustomHooks from '../../components/community/CommunityCustomHooks';

function CommunityCreateScreen() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	function Button({ label, theme, onPress }) {
		return (
			<View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 }]}>
				<Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
					<Ionicons name="add" size={50} color="#25292e" style={styles.buttonIcon} />
				</Pressable>
			</View>
		);
	}

	function ImageViewer({ selectedImage }) {
		const imageSource = selectedImage !== null && { uri: selectedImage };

		return <Image source={imageSource} style={styles.image} />;
	}

	const [selectedImage, setSelectedImage] = useState(null);

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
		} else {
			Alert.alert('이미지를 선택해주세요.', '요청');
		}
	};

	return (
		<SafeWrap>
			<Padding>
				<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
					<View
						style={{
							width: 320,
							height: 200,
							borderWidth: 2,
							borderColor: '#eee',
							borderRadius: 15,
							overflow: 'hidden',
						}}
					>
						{selectedImage ? (
							<View style={{ flex: 2 }}>
								<ImageViewer selectedImage={selectedImage} />
							</View>
						) : (
							<Pressable
								onPress={pickImageAsync}
								style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}
								hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
							>
								<Ionicons name="add" size={50} color="black" />
								<Text>이미지 추가</Text>
							</Pressable>
						)}
					</View>
					{/* <View style={styles.imageContainer}>
					<ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
				</View>
				<View style={styles.footerContainer}>
					<Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
				</View> */}

					<CommunityCustomHooks />
				</ScrollView>
			</Padding>
		</SafeWrap>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		gap: 10,
	},
	imageContainer: {
		width: 320,
		height: 200,
		borderWidth: 4,
		borderColor: '#eee',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	footerContainer: {
		alignItems: 'center',
	},
	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	},

	buttonContainer: {
		width: 320,
		height: 68,
		marginHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 3,
	},
	button: {
		borderRadius: 10,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	buttonLabel: {
		color: '#fff',
		fontSize: 16,
	},
	buttonIcon: {
		paddingRight: 8,
	},
});

export default CommunityCreateScreen;

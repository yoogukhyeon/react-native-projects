import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from 'immer';
import Padding from '../components/common/Padding';
import InputText from '../components/InputText';
import TodoList from '../components/TodoList';

async function updateStorage(data) {
	return await AsyncStorage.setItem('@todo-list', JSON.stringify(data));
}
export default Todo = () => {
	const [list, setList] = useState([]);

	const [inputText, setInputText] = useState('');

	const update = useCallback(
		async (data) => {
			setList(data);
			await updateStorage(data);
		},
		[list]
	);

	const addItem = useCallback(async () => {
		if (inputText === '') return Alert.alert('Request', '내용을 입력해주세요.');
		const item = {
			key: new Date().toString(),
			content: inputText,
			isDone: false,
		};

		const newData = [...list, item];
		update(newData);
		setInputText('');
	}, [list, inputText]);

	const removeItem = useCallback(
		async (key) => {
			const newData = list.filter((item) => item.key !== key);
			update(newData);
		},
		[list]
	);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('@todo-list');
			if (value !== null) {
				// value previously stored
				setList(JSON.parse(value));
			} else {
				setList([]);
			}
		} catch (err) {
			// error reading value
			console.log('Error', err);
			throw new Error(err);
		}
	};

	const updateItem = useCallback(
		(key, value) => {
			const newList = produce(list, (draft) => {
				const index = list.findIndex((item) => item.key === key);

				draft[index].isDone = value;
			});

			update(newList);
		},
		[list]
	);
	return (
		<Padding padding={12} style={{ flex: 1 }}>
			<TodoList list={list} removeItem={removeItem} onSwitchChange={updateItem} />
			<InputText inputText={inputText} addItem={addItem} setInputText={setInputText} />
		</Padding>
	);
};

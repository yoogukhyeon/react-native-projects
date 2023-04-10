import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

export default TodoList = ({ list, removeItem, onSwitchChange }) => {
	return (
		<FlatList
			data={list}
			renderItem={({ item }) => (
				<TodoItem
					key={item.key}
					label={item.content}
					id={item.key}
					isDone={item.isDone}
					onRemove={removeItem}
					onSwitchChange={onSwitchChange}
				/>
			)}
			keyExtractor={(item) => item.key}
		/>
	);
};

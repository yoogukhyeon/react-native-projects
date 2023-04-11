import { Switch, Text, TouchableOpacity } from 'react-native';
import Row from './common/Row';

export default TodoItem = ({ id, isDone, label, onRemove, onSwitchChange }) => {
	return (
		<Row style={{ marginBottom: 8 }}>
			<Switch onValueChange={(value) => onSwitchChange(id, value)} value={isDone} style={{ marginRight: 8 }} />
			<Text style={{ color: isDone ? '#eee' : '#000', flex: 1 }}>{label ?? '내용이 없습니다.'}</Text>
			<TouchableOpacity activeOpacity={1} onPress={() => onRemove(id)}>
				<Text style={{ color: 'red' }}>삭제</Text>
			</TouchableOpacity>
		</Row>
	);
};

import { Ionicons } from '@expo/vector-icons';

interface IProps {
	name: any;
	size: number;
	color: string;
}

function Icon({ name, size, color }: IProps) {
	return <Ionicons name={name} size={size ?? 24} color={color} />;
}

export default Icon;

import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Padding from '../components/common/Padding';
import Wrap from '../components/common/Wrap';
const problems = [
	{ id: 1, name: 'Problem 1' },
	{ id: 2, name: 'Problem 2' },
	{ id: 3, name: 'Problem 3' },
	{ id: 4, name: 'Problem 4' },
	{ id: 5, name: 'Problem 5' },
];
function Quiz({ navigation, route }: any) {
	const { query } = route.params;

	const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

	return (
		<Wrap>
			<Padding>
				<View>
					{problems.map((problem) => (
						<Button
							key={problem.id}
							title={problem.name}
							onPress={() => setSelectedProblem(problem.id)}
							disabled={selectedProblem !== null && selectedProblem !== problem.id}
						/>
					))}
					{selectedProblem !== null && (
						<View style={{ width: '100%' }}>
							<Text>{`Problem ${selectedProblem}`}</Text>
						</View>
					)}
				</View>
			</Padding>
		</Wrap>
	);
}

export default Quiz;

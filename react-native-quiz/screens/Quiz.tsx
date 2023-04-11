import { useState } from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Padding from "../components/common/Padding";
import Wrap from "../components/common/Wrap";
const problems = [
  { id: 1, name: "Problem 1" },
  { id: 2, name: "Problem 2" },
  { id: 3, name: "Problem 3" },
  { id: 4, name: "Problem 4" },
];
function Quiz({ navigation, route }: any) {
  const { query } = route.params;

  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const [nextBtn, setNextBtn] = useState<boolean>(false);
  const onPressProblem = (id: number) => {
    setSelectedProblem(id);
    setNextBtn(true);
  };

  return (
    <Wrap>
      <Padding>
        <View>
          <Text style={styles.quizTitle}>1. 챔스결승을 출전하지 못한 선수는?</Text>
        </View>
        <View>
          {problems.map((problem) => (
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor:
                    selectedProblem === problem.id
                      ? "linear-gradient(90deg, rgb(21, 243, 125), rgb(61, 196, 122))"
                      : selectedProblem !== null
                      ? "linear-gradient(90deg, rgb(233, 50, 50), rgb(185, 92, 92));"
                      : null,
                },
              ]}
              key={problem.id}
              onPress={() => onPressProblem(problem.id)}
              disabled={selectedProblem !== null && selectedProblem !== problem.id}
            >
              <Text style={styles.buttonText}>{problem.name}</Text>
            </TouchableOpacity>
          ))}
          {selectedProblem !== null && (
            <View style={{ width: "100%" }}>
              <Text>{`Problem ${selectedProblem}`}</Text>
            </View>
          )}

          {!!nextBtn && (
            <TouchableOpacity style={styles.nextBtn}>
              <Text style={styles.nextBtnText}>다음</Text>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </Padding>
    </Wrap>
  );
}

const styles = StyleSheet.create({
  quizTitle: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    width: 300,
    height: 55,
    backgroundColor: "rgb(236, 236, 236)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "rgb(104, 104, 104)",
    fontWeight: "600",
    fontSize: 18,
  },
  nextBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    height: 55,
    backgroundColor: "rgb(9, 163, 52)",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  nextBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default Quiz;

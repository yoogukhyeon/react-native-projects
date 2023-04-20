import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";

interface IProps {
  children: React.ReactNode;
}
function QuizWrap({ children }: IProps) {
  return <SafeAreaView style={styles.quizWrap}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  quizWrap: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
});

export default QuizWrap;

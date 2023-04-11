import React from "react";
import { View } from "react-native";

interface IProps {
  children: React.ReactNode;
}

function Wrap({ children }: IProps) {
  return <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>{children}</View>;
}

export default Wrap;

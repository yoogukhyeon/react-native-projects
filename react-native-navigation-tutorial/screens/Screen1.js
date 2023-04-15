import { View, Text, Button } from "react-native";

function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>hello Screen1</Text>

      <Button title="3스크린으로 이동하기" onPress={() => navigation.navigate("Screen2", { value: "from 1!!!!!!" })} />
    </View>
  );
}

export default Screen1;

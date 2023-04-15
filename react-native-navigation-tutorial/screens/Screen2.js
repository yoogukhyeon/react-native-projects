import { View, Text, Button } from "react-native";

function Screen2({ route }) {
  const { value } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>hello Screen2, {value}</Text>

      <Button title="1스크린으로 이동하기" onPress={() => console.log("screen 1 이동")} />
    </View>
  );
}

export default Screen2;

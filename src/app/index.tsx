import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Olá, expo router</Text>

      <Button title="nova meta" onPress={() => router.navigate("/target")} />
      <Button
        title="Transação"
        onPress={() => router.navigate("/transactions/132")}
      />
    </View>
  );
}

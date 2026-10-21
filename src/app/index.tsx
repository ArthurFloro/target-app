import { fontFamily } from "@/theme/fontFamily";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontFamily: fontFamily.bold, fontSize: 34 }}>
        Expo router
      </Text>

      <Button title="nova meta" onPress={() => router.navigate("/target")} />

      <Button
        title="Transação"
        onPress={() => router.navigate("/transactions/132")}
      />

      <Button
        title="progresso"
        onPress={() => router.navigate("/in-progress/22")}
      />
    </View>
  );
}

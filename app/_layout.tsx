import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
      <Stack />
    </SafeAreaView>
  );
}

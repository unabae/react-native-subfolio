import "@/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const statusBarStyle = colorScheme === "dark" ? "light" : "dark";

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style={statusBarStyle} />
    </>
  );
}

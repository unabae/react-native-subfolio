import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// We wrap the SafeAreaView to apply custom styles
const SafeAreaView = styled(RNSafeAreaView);

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">Onboarding Screen</Text>
    </SafeAreaView>
  );
};
export default Onboarding;

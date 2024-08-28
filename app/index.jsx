import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Front Page</Text>
        <Link href="/login" className="text-2xl">
          Login
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default App;

import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { icons } from "../../constants";
import { Link } from "expo-router";

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

export default function Profile() {
  return (
    <View
      className="flex pt-10 min-h-full"
      style={{ backgroundColor: "#141740" }}
    >
      <View className="w-full flex-row justify-evenly">
        <Link href="/">
          <Image source={icons.back} className="w-8 h-8 mt-2" />
        </Link>
        <Text className="text-xl text-white text-center m-3">Profile</Text>
        <Image source={icons.settings} className="w-8 h-8 mt-3" />
      </View>

      <View
        className="border"
        style={[styles.gradientCircle, styles.circle1]}
      ></View>
      <View style={[styles.gradientCircle, styles.circle2]} />

      <BlurView
        intensity={0}
        className="m-10 flex items-center justify-center w-72 h-80 border-none rounded-3xl shadow-lg"
        style={{ elevation: 5 }}
      >
        <View className="top-10 flex-1">
          <View className="">
            <Image source={icons.person} className="w-40 h-40 rounded-full" />
          </View>
          <View className="mt-2 mr-2 bottom-12 left-32">
            <Image source={icons.camera} className="w-9 h-9" />
          </View>
        </View>

        <View className="mb-5">
          <Text className="text-white text-2xl text-center">Ashish Verma</Text>
          <Text className="text-white text-sm text-center">
            Backend Developer
          </Text>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientCircle: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#D600F9",
    opacity: 0.5,
  },
  circle1: {
    top: 100,
    right: -90,
  },
  circle2: {
    bottom: 200,
    left: -60,
  },
});

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { icons } from "../../constants";
import { Link } from "expo-router";

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

export default function Profile() {
  return (
    <ScrollView
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
        intensity={90}
        className="m-10 flex items-center justify-center w-72 h-80 border-none rounded-3xl shadow-2xl"
        style={{
          elevation: 3,
          overflow: "hidden",
        }}
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
      <View>
        <View className="ml-2 mb-1">
          <Text className="text-2xl font-bold text-gray-400">
            Personal Information
          </Text>
          <View className="flex-row mt-5">
            <View className="m-2 mr-5">
              <Image source={icons.calender} className="w-7 h-9" />
            </View>
            <View>
              <Text className="text-white text-xl">October 31, 2001</Text>
              <Text className="text-gray-400 font-light text-base">
                Birthday
              </Text>
            </View>
          </View>
          <View className="flex-row mt-5">
            <View className="m-2 mr-5">
              <Image source={icons.user} className="w-7 h-9" />
            </View>
            <View>
              <Text className="text-white text-xl">Male</Text>
              <Text className="text-gray-400 font-light text-base">Gender</Text>
            </View>
          </View>
        </View>
        <View className="h-64 ml-2">
          <Text className="text-2xl font-bold text-gray-400">
            College Information
          </Text>
          <View className="flex-row mt-5">
            <View className="m-2 mr-5">
              <Image source={icons.marker} className="w-9 h-9" />
            </View>
            <View>
              <Text className="text-white text-xl">23EUCIT200</Text>
              <Text className="text-gray-400 font-light text-base">
                Roll No.
              </Text>
            </View>
          </View>
          <View className="flex-row mt-5">
            <View className="m-2 mr-5">
              <Image source={icons.home} className="w-9 h-9" />
            </View>
            <View>
              <Text className="text-white text-xl">Development</Text>
              <Text className="text-gray-400 font-light text-base">Gender</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
    top: 75,
    right: -90,
  },
  circle2: {
    top: 250,
    left: -60,
  },
});

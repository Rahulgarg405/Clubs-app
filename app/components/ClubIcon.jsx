import { View, Text, Image } from "react-native";
import React from "react";

const ClubIcon = ({ clubName }) => {
  return (
    <View className="m-1 flex items-center">
      <Image source="" className="w-20 h-20 bg-white rounded-full" />
      <Text className="text-slate-300">{clubName}</Text>
    </View>
  );
};

export default ClubIcon;

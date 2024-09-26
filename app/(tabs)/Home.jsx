import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import FormField from "../components/FormField";
import { icons } from "../../constants";
import Update from "../components/Update";
import ClubIcon from "../components/ClubIcon";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <ScrollView className="" style={{ backgroundColor: "#1E1E1E" }}>
      <View className="flex-row justify-between m-2">
        <View>
          <Text className="text-sm mt-5 text-slate-300">Welcome ,</Text>
          <Text className="text-3xl text-white">Rahul</Text>
        </View>
        <Image source="" className="mt-6 w-12 h-12 bg-white rounded-full" />
      </View>
      <FormField
        title="Search"
        placeholder="Search"
        value={search}
        handleChangeText={(e) => setSearch({ ...search, e })}
        icon={icons.search}
        otherStyles="mt-1 bg-white text-slate-600"
        placeGray={true}
      />

      <View>
        <Text className="text-2xl text-slate-300 mt-1">Updates</Text>
        <View className="flex-row flex-wrap justify-evenly">
          <Update />
          <Update />
          <Update />
          <Update />
        </View>
        <Text className="text-blue-400 left-72">See More...</Text>
      </View>

      <View>
        <Text className="text-xl text-slate-300 mt-1">
          Join What makes you happy
        </Text>
        <View className="flex-row flex-wrap">
          <ClubIcon clubName="Piccasso" />
          <ClubIcon clubName="VSC" />
          <ClubIcon clubName="RTU Coders" />
          <ClubIcon clubName="SRC" />
          <ClubIcon clubName="Music" />
          <ClubIcon clubName="Dance" />
          <ClubIcon clubName="ECO" />
          <ClubIcon clubName="Drama" />
        </View>
        <Text className="text-blue-400 left-72">See More...</Text>
      </View>
      <CustomButton title="Upcoming Events" />

      <View className="p-12"></View>
    </ScrollView>
  );
};

export default Home;

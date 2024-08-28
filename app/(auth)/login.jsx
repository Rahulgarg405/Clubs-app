import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { icons } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link, router } from "expo-router";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = () => {
    if (form.email === "rahul@gmail.com" && form.password === "12345678") {
      router.replace("/Home");
    }
  };

  return (
    <SafeAreaView className="h-full" style={{ backgroundColor: "#4A1E75" }}>
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
          <Text className="text-3xl text-white mb-2">LOGIN</Text>
          <Text className="text-white text-base mb-4">
            Please Sign In to continue
          </Text>

          <FormField
            icon={icons.mail}
            title="Email"
            placeholder="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            // otherStyles={{backgroundColor:'#313866'}}
            otherStyles="mt-4 mb-4"
          />
          <FormField
            title="Password"
            placeholder="Password"
            value={form.password}
            icon={icons.lock}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-4 mb-4"
          />
          <CustomButton title="LOGIN" handlePress={submit} />
          <View className="justify-start flex items-center">
            <Text className="text-blue-300 text-base">Forgot Password?</Text>
            <View className="justify-center pt-10 flex-row gap-2">
              <Text className="text-lg text-white">Don't have Account?</Text>
              <Link className="text-lg text-blue-500" href="/signup">
                Sign-Up
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { icons } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <SafeAreaView className="h-full" style={{ backgroundColor: "#4A1E75" }}>
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
          <Text className="text-3xl text-white mb-2">Create Account</Text>
          <Text className="text-white text-base mb-4">
            Please fill the input below here
          </Text>

          <FormField
            icon={icons.fullName}
            title="Full Name"
            placeholder="Full Name"
            value={form.fullName}
            handleChangeText={(e) => setForm({ ...form, fullName: e })}
            otherStyles="mt-2 mb-2"
          />
          <FormField
            icon={icons.phone}
            title="Phone"
            placeholder="Phone"
            value={form.phone}
            handleChangeText={(e) => setForm({ ...form, phone: e })}
            otherStyles="mt-2 mb-2"
          />
          <FormField
            icon={icons.mail}
            title="Email"
            placeholder="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            // otherStyles={{backgroundColor:'#313866'}}
            otherStyles="mt-2 mb-2"
          />
          <FormField
            title="Password"
            placeholder="Password"
            value={form.password}
            icon={icons.lock}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-2 mb-2"
          />
          <FormField
            title="ConfirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            icon={icons.lock}
            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
            otherStyles="mt-2 mb-2"
          />
          <CustomButton title="SIGN UP" handlePress={() => {}} />
          <View className="justify-start flex items-center">
            <View className="justify-center pt-10 flex-row gap-2">
              <Text className="text-lg text-white">
                Already have an Account?
              </Text>
              <Link className="text-lg text-blue-500" href="/login">
                Sign-In
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

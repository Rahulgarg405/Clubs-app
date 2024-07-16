import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../../constants";

const FormField = ({
  title,
  placeholder,
  value,
  icon,
  handleChangeText,
  otherStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2`}>
      <View
        className={`border-2 border-gray-800  w-full h-16 px-4 bg-black-100 rounded-3xl focus:border-red items-center flex-row ${otherStyles}`}
      >
        <Image source={icon} className="w-7 h-7 mr-2" />
        <TextInput
          className="flex-1 text-white text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="white"
          onChangeText={handleChangeText}
          secureTextEntry={
            (title === "Password" || title === "ConfirmPassword") &&
            !showPassword
          }
        />

        {(title === "Password" || title === "ConfirmPassword") && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

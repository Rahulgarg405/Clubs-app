import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        style={{backgroundColor:'#00F0FF'}}
        className='justify-center min-h-[62px] min-w-[30vh] rounded-full items-center mt-7'
    >
        <Text className='text-xl text-black'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
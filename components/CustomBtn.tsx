import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomBtnProps{
    title: string
    onPress: ()=>void
    textStyles?: string
    containerStyle?: string

}

const CustomBtn = ({title, onPress, textStyles, containerStyle}: CustomBtnProps) => {
    

  return (
    <TouchableOpacity className={`min-h-[50px] justify-center items-center  bg-white p-2 rounded-lg ${containerStyle}`} onPress={onPress}>
      <Text className={`'text-black text-lg font-normal text-center ${textStyles}`} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import CustomBtn from '@/components/CustomBtn'
import { useDispatch } from 'react-redux'
import { setDuration } from '@/redux/slice'
import { AppDispatch } from '@/redux/store'

const MeditationAdjustDuration = () => {
  const dispatch: AppDispatch =useDispatch()
  const handleDuration=(duration: number)=>{
      dispatch(setDuration(duration))    
      router.back()
  }
  return (
    <View className='flex-1 relative'>
      <LinearGradient className='flex-1' colors={["#161b2e", '#0a4d4a', '#766e67']}>
      <Pressable
            className="absolute top-14  pl-4"
            onPress={() => router.back()}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </Pressable>

      <View className='flex-1 justify-center px-6'> 
    <Text className='text-3xl font-medium mb-14 text-white text-center '>Adjust your Meditation duration</Text>
    <View>
      <CustomBtn onPress={()=>handleDuration(20)} title="20 Seconds" />
      <CustomBtn onPress={()=>handleDuration(5*60)} title="5 minutes" containerStyle='mt-4'/>
      <CustomBtn onPress={()=>handleDuration(10*60)} title="10 minutes" containerStyle='mt-4'/>
      <CustomBtn onPress={()=>handleDuration(15*60)} title="15 minutes" containerStyle='mt-4'/>
    </View>
      </View>
      </LinearGradient>
    </View>
  )
}

export default MeditationAdjustDuration
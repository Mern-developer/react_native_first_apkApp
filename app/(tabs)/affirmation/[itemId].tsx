import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
interface GuidedAffirmationgallery{
    id: number | undefined
    text: string | undefined
    image: any | undefined
}

const ItemIdForAffirmation = () => {
    const { itemId } =useLocalSearchParams();
const [affirmation, setAffirmation] =useState<GuidedAffirmationgallery | undefined>()    
const [texts, setTexts] =useState<string[]>([])    
    useEffect(()=>{
     for (let id=0; id < AFFIRMATION_GALLERY.length; id++){
        const affirmationID = AFFIRMATION_GALLERY[id]?.data 
        const affirmationData = affirmationID?.find(a=> a.id === Number(itemId))
        if(affirmationData){
            setAffirmation(affirmationData)
            const eclipse = affirmationData.text.split('.');
            if(eclipse[eclipse.length -1] === ''){
                eclipse.pop()
            }
            setTexts(eclipse)
            return
        }
    }
    
    },[])
  return (
    <GestureHandlerRootView className='flex-1'>
    <View className='flex-1'>
        <ImageBackground 
         source={affirmation?.image}
         resizeMode='cover'
         className='flex-1'
        >
            <LinearGradient className='flex-1' colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
            <SafeAreaView className='px-2'>
                <Pressable className='pl-4' onPress={()=>router.back()}>
                <AntDesign name="arrowleft"  size={30} color='white' />
                </Pressable>
             <ScrollView className='mt-5' showsVerticalScrollIndicator={false} >
            <View className='h-full justify-center'>
                <View className='h-4/5 justify-center'>

            {texts.map((p,i)=>{
                return( 
                    <Text className='text-white text-xl px-4 mb-5 justify-center ' key={i}>{p}.</Text>
                )
            })}
            </View>
                
            </View>
                </ScrollView>   
            </SafeAreaView>
            </LinearGradient>
        </ImageBackground>
    </View>
    </GestureHandlerRootView>
  )
}

export default ItemIdForAffirmation
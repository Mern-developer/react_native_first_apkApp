import { View, Text, Pressable,FlatList, Image } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

interface GuidedAffirmationgalleryProps{
    title:string
    preview: GuidedAffirmationgallery[]
}
interface GuidedAffirmationgallery{
    id: number
    text: string
    image: any
}
const GuidedAffirmationgallery = ({title, preview}:GuidedAffirmationgalleryProps) => {
  const router =useRouter()
  return (
    <View className='flex-1'>
      <Text className='text-lg text-white '>{title}</Text>
      <View className='my-3'>
        <FlatList   
            data={preview}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item})=>(
                <Pressable className='' 
                // onPress={()=>router.push(`/affirmation/${(item.id.toString())}` )}
                >
                  <Link href={`/affirmation/${item.id.toString()}`}>
                      <View className='h-40 w-40  mb-3 pr-2'>
                        <Image source={item.image} resizeMode="cover" className=' rounded-md w-full h-full' />
                        </View>                      
                        </Link>
                </Pressable>
            )}
            horizontal
        />  
      </View>  
    </View>
  )
}

export default GuidedAffirmationgallery
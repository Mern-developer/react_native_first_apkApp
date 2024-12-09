import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import GuidedAffirmationgallery from "@/components/GuidedAffirmationgallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";

const Affirmation = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        className="flex-1"
        colors={["#2e1f58", "#54426b", "#a790af"]}
      >
        <SafeAreaView className="flex-1 ">
          <View className="mb-3">
          <Text className="text-white text-2xl px-3 font-medium">Change your belief with affirmation</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} >

          <View className="px-3">
            {AFFIRMATION_GALLERY.map(g=>{ 
              return( 
                <GuidedAffirmationgallery  
                 key={g.title} title={g.title} preview={g.data}
                />
              )
            })}
          </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
};

export default Affirmation;

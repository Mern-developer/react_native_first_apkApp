import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import CustomBtn from "../components/CustomBtn";
import { useRouter } from "expo-router";
const index = () => {
      const router = useRouter()
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1 "
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 justify-between mx-4">
            <View>
              <Text className="text-3xl font-medium text-white text-center">
                Simple Meditation
              </Text>
              <Text className="text-xl font-normal text-center text-white">
                Simplify Meditation for every one!
              </Text>
            </View>
            <View>
              <CustomBtn
                onPress={() => router.push('/nature-meditation')}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default index;

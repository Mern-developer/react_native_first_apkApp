import {
  View,
  Text,
  StatusBar,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { MEDITATION_DATA } from "@/constants/medititation-data";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { router } from "expo-router";
const Naturemeditation = () => {
  return (
    <View className="flex-1">
        <LinearGradient
          className="flex-1"
          colors={["#161b2e", "#0a4d4a", "#766e67"]}
        >
      <SafeAreaView className="flex-1 ">
          <View>
            <Text className="text-center font-medium px-2 pt-2 text-4xl text-white ">
              Welcome Steven
            </Text>
            <Text className="text-center px-2 text-xl mb-5 text-white ">
              Start your meditation practice today
            </Text>
          </View>
          <View className="flex-1 px-3">
            <FlatList
              data={MEDITATION_DATA}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => router.push(`/meditation/${item.id.toString()}`)}
                  className=" h-60 mb-5 rounded-lg overflow-hidden"
                >
                  <ImageBackground
                    source={MEDITATION_IMAGES[item.id - 1]}
                    resizeMode="cover"
                    className=" flex-1"
                  >
                    <LinearGradient
                      className="flex-1 justify-center items-center "
                      colors={["transparent", "rgba(0,0,0,0.6)"]}
                    >
                      <Text className="text-white  text-3xl font-medium">
                        {item.title}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </Pressable>
              )}
            />
          </View>

          <StatusBar barStyle={"light-content"} />
      </SafeAreaView>
        </LinearGradient>
    </View>
  );
};

export default Naturemeditation;

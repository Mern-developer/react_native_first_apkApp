import {
  View,
  Text,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import MEDITATION_IMAGE from "@/constants/meditation-images";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import CustomBtn from "@/components/CustomBtn";
import { Audio } from "expo-av";
import { AUDIO_FILES, MEDITATION_DATA } from "@/constants/medititation-data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setDuration as setDurationAction } from "@/redux/slice";
import CustModal from "@/components/CustModal";

const MeditationID = () => {
  const { duration, setDuration } = useSelector((state: RootState) => state.setMeditationDuration);
  const dispatch = useDispatch();
  const { id } = useLocalSearchParams();
  const [isMeditationTime, setIsMeditationTime] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound | null>(null);
  const [isAudioPlay, setIsAudioPlay] = useState<boolean>(false);
  const [isSoundLoaded, setIsSoundLoaded] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isIntialLoading, setIsIntialloading] = useState<boolean>(true);


  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    timeoutId = setTimeout(() => {
      if (duration === 0) {
        dispatch(setDurationAction(20));
        if (audioSound) {
          audioSound.unloadAsync().catch(error => console.error("Error unloading audio", error));
        }
        setIsMeditationTime(false);
        return;
      }
      if (isMeditationTime && isSoundLoaded) {
        dispatch(setDurationAction(duration - 1));
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [duration, isSoundLoaded, isMeditationTime, dispatch]);

  const remainingSeconds = String(Math.floor(duration % 60)).padStart(2, "0");
  const remainingMinutes = String(Math.floor(duration / 60)).padStart(2, "0");

  // const toggleAudioFiles = async () => {
    
  //   await toggleSelectedAudioFile();
  // };

  const toggleSelectedAudioFile = async () => {
    if (duration === 0) dispatch(setDurationAction(20));
    setIsMeditationTime(!isMeditationTime);
if(isIntialLoading){
  setIsModalVisible(true)
}

    try {
      if (audioSound) {
        const status = await audioSound.getStatusAsync();
        console.log('Audio status:', status);
        if (status.isLoaded) {
          if (isAudioPlay) {
            await audioSound.pauseAsync();
            setIsAudioPlay(false);
          } else {
            await audioSound.playAsync();
            setIsAudioPlay(true);
            setIsIntialloading(false);
          }
        } else {
          console.error("Audio is not loaded");
        }
      } else {
        const sound = await playAudio();
        setAudioSound(sound);
        setIsSoundLoaded(true);
        await sound.playAsync();
        setIsAudioPlay(true);
        setIsIntialloading(false)
      }
    } catch (error) {
      console.error("Error from toggleSelectedAudioFile fun", error);
    }finally{ 
      if(isIntialLoading){ 
        setIsModalVisible(false)
      }
    }
  };

  const playAudio = async () => {
    try {
      const selectedAudio = MEDITATION_DATA[Number(id) - 1].audio;
      const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[selectedAudio], { isLooping: true });
      setIsSoundLoaded(true);
      return sound;
    } catch (error) {
      console.error("Error loading audio", error);
      throw error;
    }
  };

  useEffect(() => {
    return () => {
      if (audioSound) {
        dispatch(setDurationAction(duration));
        audioSound.unloadAsync().catch(error => console.error("Error unloading audio", error));
      }
    };
  }, [audioSound,dispatch]);

  const handleMeditationDuration = () => {
    if (isMeditationTime) toggleSelectedAudioFile();
    router.push('/(modal)/meditation-adjust-duration' as any);
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGE[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["transparent", "rgba(0,0,0,0.2)"]}
        >
          <Pressable
            className="absolute top-14 pl-4"
            onPress={() => router.back()}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </Pressable>
          <View className="flex-1 justify-center items-center">
            <View className="felx-1 justify-center items-center h-44 w-44 rounded-full bg-slate-50 mx-auto">
              <Text className="text-black text-3xl font-rmono">{`${remainingMinutes}`}:{`${remainingSeconds}`}</Text>
            </View>
          </View>
          <View className="mb-5 px-10">
            <CustomBtn onPress={handleMeditationDuration} title="Adjust timing" containerStyle="mb-4" />
            <CustomBtn onPress={toggleSelectedAudioFile} title={isMeditationTime ? "Stop" : "Start Meditation"} />
          </View>
        </LinearGradient>
      </ImageBackground>
    
    <CustModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </View>
  );
};

export default MeditationID;

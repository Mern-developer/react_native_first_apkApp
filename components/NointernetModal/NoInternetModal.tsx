import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const NoInternetModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsModalVisible(!state.isConnected);
    });
console.log(unsubscribe)
    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <Modal
      transparent
      visible={isModalVisible}
      animationType="slide"
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View className={`flex-1 justify-center items-center bg-black/50`}>
        <View className={`w-72 p-5 rounded-lg bg-white items-center`}>
          <Text className={`text-lg mb-4`}>No Internet Connection...</Text>
          <Button
            title="Retry"
            onPress={() => {
              // Trigger a manual check or attempt reconnection
              NetInfo.fetch().then(state => {
                if (state.isConnected) {
                  setIsModalVisible(false);
                }
              });
            }}
          />
        </View>
      </View>
    </Modal>
     );
};

export default NoInternetModal;

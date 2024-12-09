import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
type Props={
    isModalVisible: boolean
    setIsModalVisible: (isModalVisible: boolean)=>void
}
const CustModal = ({isModalVisible, setIsModalVisible}: Props) => {

  return (
    <Modal
    transparent
    visible={isModalVisible}
    animationType="slide"
    onRequestClose={() => setIsModalVisible(false)}
  >
    <View className={`flex-1 justify-center items-center bg-black/50`}>
      <View className={`w-72 p-5 rounded-lg bg-white items-center`}>
        <Text className={`text-lg mb-4 customAnimation`}>Loading...</Text>
      </View>
    </View>
  </Modal>
  )
}

export default CustModal
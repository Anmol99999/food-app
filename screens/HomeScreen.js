import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline"

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row pb-3 mx-4 space-x-2 items-center">
                <Image source={{
                    uri: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80"

                }}
                    className="w-7 h-7 bg-gray-300 rounded-full p-4"
                />
                <View className="flex-1">
                    <Text className=" font-bold text-xs text-gray-400">Deliver Now!</Text>
                    <Text className="text-bold text-xl">Current location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
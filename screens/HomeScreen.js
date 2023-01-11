import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline"
import { AdjustmentsVerticalIcon } from "react-native-heroicons/solid"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-5">
            {/* HEADER */}
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

            {/* SEARCH BAR */}
            <View className="flex-row items-center mx-4 pb-2 space-x-2">
                <View className="flex-row space-x-2 bg-gray-200 p-2 flex-1">
                    <MagnifyingGlassIcon color="grey" />
                    <TextInput className=" flex-1" placeholder='Restaurants and cuisines'
                        keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            {/* BODY */}
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="bg-gray-100" >
                {/* CATEGORIES */}
                <Categories />

                {/* FEATURED */}
                <FeaturedRow id="1" title="Featured" description="Paid placements from our partners" />
                {/* TASTY DISCOUNTS */}
                <FeaturedRow id="2" title="Tasty Discounts" description="Everyone's been enjoying these juicy discounts!" />
                {/* OFFERS NEAR YOU */}
                <FeaturedRow id="3" title="Offers near you" description="why not support your local restaurant tonight!" />

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen
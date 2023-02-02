import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline"
import { AdjustmentsVerticalIcon } from "react-native-heroicons/solid"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from "../sanity"


const HomeScreen = () => {


    const [featuredCatergories, setFeaturedCatergories] = useState()

    useEffect(() => {
        sanityClient.fetch(`
*[_type == "featured"]{
    ...,
    restaurants[]->{
        ...,
        dishes[]->,
        type[]->{
            name
        }
    }
}
`).then(data => setFeaturedCatergories(data))
    }, [])


    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    console.log(featuredCatergories)

    if (!featuredCatergories) return null
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
                {
                    featuredCatergories?.map(category =>
                        <FeaturedRow
                            key={category._id}
                            id={category._id} title={category.name}
                            description={category.short_description}
                            restaurants={category.restaurants}
                        />


                    )
                }


            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen
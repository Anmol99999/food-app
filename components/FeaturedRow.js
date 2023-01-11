import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-400 px-4">{description}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 pt-4">
                {/* RESTAURANT CARD */}
                <RestaurantCard />
            </ScrollView>

        </View>
    )
}

export default FeaturedRow
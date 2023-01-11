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
                <RestaurantCard
                    id={123}
                    title="yo"
                    rating={4.5}
                    imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    genre="Japanese"
                    address="Karnal"
                    dishes={[]}
                    long={20}
                    lat={20}
                />
                <RestaurantCard
                    id={123}
                    title="yo"
                    rating={4.5}
                    imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    genre="Japanese"
                    address="Karnal"
                    dishes={[]}
                    long={20}
                    lat={20}
                />
                <RestaurantCard
                    id={123}
                    title="yo"
                    rating={4.5}
                    imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    genre="Japanese"
                    address="Karnal"
                    dishes={[]}
                    long={20}
                    lat={20}
                />
                <RestaurantCard
                    id={123}
                    title="yo"
                    rating={4.5}
                    imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    genre="Japanese"
                    address="Karnal"
                    dishes={[]}
                    long={20}
                    lat={20}
                />

            </ScrollView>

        </View>
    )
}

export default FeaturedRow
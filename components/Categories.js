import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView className="px-4 pt-3" horizontal showsHorizontalScrollIndicator={false}>
            {/* CATEGORY CARD */}
            <CategoryCard imgUrl="https://images.pexels.com/photos/1438404/pexels-photo-1438404.jpeg?auto=compress&cs=tinysrgb&w=600" title="Food" />
            <CategoryCard imgUrl="https://images.pexels.com/photos/1438404/pexels-photo-1438404.jpeg?auto=compress&cs=tinysrgb&w=600" title="Food" />
            <CategoryCard imgUrl="https://images.pexels.com/photos/1438404/pexels-photo-1438404.jpeg?auto=compress&cs=tinysrgb&w=600" title="Food" />
            <CategoryCard imgUrl="https://images.pexels.com/photos/1438404/pexels-photo-1438404.jpeg?auto=compress&cs=tinysrgb&w=600" title="Food" />
            <CategoryCard imgUrl="https://images.pexels.com/photos/1438404/pexels-photo-1438404.jpeg?auto=compress&cs=tinysrgb&w=600" title="Food" />
        </ScrollView>
    )

}

export default Categories
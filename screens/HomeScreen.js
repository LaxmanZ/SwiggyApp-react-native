import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';

const HomeScreen = () => {
  return (
    <ScrollView>
      {/* Search Bar  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderColor: '#c0c0c0',
          borderWidth: 1,
          padding: 7,
          margin: 8,
          borderRadius: 5,
        }}
      >
        <TextInput
          placeholder="Search for Restaurant Item or more"
          style={{ fontSize: 17 }}
        />
        <Feather name="search" size={24} color="#e52b50" />
      </View>

      {/* Image Slider Component  */}
      <Carousel />

      {/* Food Types Component  */}
      <FoodTypes />

      {/* Quick Food Component  */}
      <QuickFood />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

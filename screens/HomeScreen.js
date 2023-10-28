import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import Carousel from '../components/Carousel';

const HomeScreen = () => {
  return (
    <SafeAreaView>
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

      {/* Carousel Part  */}
      <Carousel />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

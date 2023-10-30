import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text style={{ fontSize: 18, fontWeight: '600' }}>
          {route.params.name}
        </Text>
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});

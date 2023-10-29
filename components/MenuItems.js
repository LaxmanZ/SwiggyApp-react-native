import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const MenuItems = ({ item }) => {
  //   console.log(item);

  return (
    <View style={{ margin: 10 }}>
      <Pressable style={{ flexDirection: 'row' }}>
        <Image
          style={{ aspectRatio: 4 / 5, height: 170, borderRadius: 8 }}
          source={{ uri: item.image }}
        />
        <AntDesign
          style={{ position: 'absolute', top: 10, left: 100 }}
          name="hearto"
          size={24}
          color="white"
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: '400' }}>
              {item.rating}
            </Text>
            <Text style={{ marginLeft: 3 }}>•</Text>
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: '400' }}>
              {item.time} mins
            </Text>
          </View>
          <Text
            style={{
              marginTop: 6,
              fontSize: 16,
              fontWeight: '500',
              color: 'gray',
            }}
          >
            {item.adress}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: '#FFB6C1',
                width: 22,

                height: 22,
                borderRadius: 11,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                marginTop: 5,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              {item.cost_for_two} for two
            </Text>
          </View>

          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}
          >
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'gray',
                marginLeft: 5,
              }}
            >
              FREE DELIVERY
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({});

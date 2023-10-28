import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FoodTypes = () => {
  const types = [
    {
      id: '0',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq',
      name: 'Biriyani',
    },
    {
      id: '1',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc',
      name: 'Dessert',
    },
    {
      id: '2',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs',
      name: 'Burger',
    },
    {
      id: '3',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud',
      name: 'Salad',
    },
    {
      id: '4',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb',
      name: 'Sandwiches',
    },
  ];
  return (
    <View style={{ padding: 10, marginTop: 7 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        What's On Your Mind
      </Text>
      <ScrollView
        style={{ marginTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {types.map((item, index) => (
          <View style={{ alignItems: 'center', margin: 10 }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 50 }}
              resizeMode="contain"
              source={{ uri: item.image }}
            />
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                textAlign: 'center',
                marginTop: 5,
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodTypes;

const styles = StyleSheet.create({});

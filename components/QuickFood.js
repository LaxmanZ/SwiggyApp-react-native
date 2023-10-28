import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import quickfood from '../data/quickfood';
import { MaterialIcons } from '@expo/vector-icons';

const QuickFood = () => {
  const data = quickfood;
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>QuickFood's</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable
            key={index}
            style={{
              margin: 10,
              marginTop: 15,
              //   backgroundColor: 'white',
              //   borderColor: 'gray',
              //   borderWidth: 1,
            }}
          >
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <Text
                style={{
                  position: 'absolute',
                  color: 'white',
                  fontSize: 28,
                  fontWeight: '900',
                  left: 10,
                  bottom: 10,
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text style={{ fontSize: 16, fontWeight: '500', marginTop: 10 }}>
              {item.name}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 3,
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
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});

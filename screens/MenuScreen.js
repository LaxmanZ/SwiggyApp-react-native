import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons';

const MenuScreen = () => {
  const route = useRoute();
  // console.log(route.params);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          height: 300,
          backgroundColor: '#b0c4de',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
          }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={24}
            color="black"
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="search" size={22} color="black" />
            <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: '600' }}>
              Search
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            height: 215,
            marginHorizontal: 20,
            marginVertical: 5,
            padding: 10,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 3 }}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <AntDesign name="sharealt" size={24} color="black" />
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: '400' }}>
              {route.params.rating}
            </Text>
            <Text style={{ marginLeft: 3 }}>•</Text>
            <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: '400' }}>
              {route.params.time} mins
            </Text>
          </View>

          <Text style={{ marginTop: 6, fontSize: 17, color: 'gray' }}>
            {route.params.cuisines}
          </Text>

          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }}
          >
            <Text style={{ fontSize: 16 }}>Outlet</Text>
            <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: 'bold' }}>
              {route.params.adress}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 7,
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>22 mins</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Home</Text>
          </View>

          <Text
            style={{
              borderColor: 'gray',
              borderWidth: 0.6,
              height: 1,
              marginTop: 12,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <FontAwesome name="bicycle" size={24} color="orange" />
            <Text style={{ marginLeft: 7, color: 'gray', fontSize: 16 }}>
              0-3 Kms |
            </Text>
            <Text style={{ marginLeft: 7, color: 'gray', fontSize: 16 }}>
              35 Delivery Free Will Apply
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/CartReducer';

const MenuComponent = ({ food }) => {
  const dispatch = useDispatch();
  const [additems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);

  return (
    <View>
      <Pressable
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{food.name}</Text>
          <Text>{food.price}</Text>
          <Text style={{ marginTop: 5 }}>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                style={{ paddingHorizontal: 3 }}
                name={i < Math.floor(food.rating) ? 'star' : 'star-o'}
                size={15}
                color="#ffd700"
              />
            ))}
          </Text>
          <Text
            style={{ width: 180, color: 'gray', marginTop: 5, fontSize: 16 }}
          >
            {food.description.length > 30
              ? food.description.substr(0, 35) + '...'
              : food.description}
          </Text>
        </View>
        <Pressable style={{ marginRight: 10 }}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 8 }}
            source={{ uri: food.image }}
          />
          {selected ? (
            <Pressable
              style={{
                position: 'absolute',
                top: 90,
                left: 15,

                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 5,
              }}
            >
              <Pressable
                onPress={() => {
                  if (additems === 1) {
                    dispatch(removeFromCart(food));
                    setSelected(false);
                    setAddItems(0);
                  } else {
                    setAddItems((c) => c - 1);
                    dispatch(decrementQuantity(food));
                  }
                }}
                style={{
                  paddingHorizontal: 6,
                  paddingVertical: 5,
                  backgroundColor: 'white',
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontSize: 25, color: 'green' }}>-</Text>
              </Pressable>

              <Pressable
                style={{
                  paddingHorizontal: 6,
                  paddingVertical: 5,
                  backgroundColor: 'white',
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontSize: 20, color: 'green' }}>{additems}</Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setAddItems((c) => c + 1);
                  dispatch(incrementQuantity(food));
                }}
                style={{
                  paddingHorizontal: 6,
                  paddingVertical: 5,
                  backgroundColor: 'white',
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontSize: 20, color: 'green' }}>+</Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (additems == 0) {
                  setAddItems((c) => c + 1);
                }
                dispatch(addToCart(food));
              }}
              style={{
                position: 'absolute',
                top: 95,
                left: 20,
                flexDirection: 'row',
                paddingHorizontal: 25,
                paddingVertical: 5,
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 5,
              }}
            >
              <Text
                style={{ fontSize: 18, color: '#018749', fontWeight: '600' }}
              >
                ADD
              </Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({});

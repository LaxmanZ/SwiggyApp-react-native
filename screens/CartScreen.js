import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/CartReducer';

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  return (
    <ScrollView style={{ marginTop: 40 }}>
      {total > 0 ? (
        <>
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

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: 15,
              marginHorizontal: 10,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '500' }}>
              Ordering For Someone Else ?
            </Text>
            <Text
              style={{
                color: '#ff4500',
                marginRight: 10,
                fontSize: 16,
                fontWeight: '700',
              }}
            >
              Add Details
            </Text>
          </View>

          <View
            style={{
              marginTop: 16,
              marginHorizontal: 10,
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 15,
            }}
          >
            {cart.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: 10,
                }}
              >
                <Text style={{ width: 120, fontSize: 16, fontWeight: '500' }}>
                  {item.name}
                </Text>

                <Pressable
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: 'center',
                    borderColor: '#BEBEBE',
                    borderWidth: 0.5,
                    borderRadius: 10,
                  }}
                >
                  <Pressable
                    onPress={() => {
                      dispatch(decrementQuantity(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                        paddingHorizontal: 6,
                        fontWeight: '600',
                      }}
                    >
                      -
                    </Text>
                  </Pressable>

                  <Pressable>
                    <Text
                      style={{
                        fontSize: 19,
                        color: 'green',
                        paddingHorizontal: 8,
                        fontWeight: '600',
                      }}
                    >
                      {item.quantity}
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      dispatch(incrementQuantity(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                        paddingHorizontal: 6,
                        fontWeight: '600',
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </Pressable>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  ₹{item.price * item.quantity}
                </Text>
              </View>
            ))}
          </View>
        </>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '80%',
          }}
        >
          <Text
            style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
          >
            Your Cart is Empty
          </Text>
          <Pressable
            style={{
              backgroundColor: '#ff4500',
              padding: 8,
              width: 90,
              borderRadius: 8,
              marginTop: 15,
            }}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              Go Back
            </Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});

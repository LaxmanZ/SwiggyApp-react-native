import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  cleanCart,
  decrementQuantity,
} from '../redux/CartReducer';

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const instructions = [
    {
      id: '0',
      name: 'Avoid Ringing',
      iconName: 'bell',
    },
    {
      id: '1',
      name: 'Leave at the door',
      iconName: 'door-open',
    },
    {
      id: '2',
      name: 'directions to reach',
      iconName: 'directions',
    },
    {
      id: '3',
      name: 'Avoid Calling',
      iconName: 'phone-alt',
    },
  ];

  return (
    <>
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

            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>
                Delivery Instructions
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ margin: 10 }}
              >
                {instructions.map((item, i) => (
                  <Pressable
                    style={{
                      margin: 10,
                      padding: 10,
                      borderRadius: 10,
                      backgroundColor: 'white',
                    }}
                    key={i}
                  >
                    <FontAwesome5 name={item.iconName} size={22} color="gray" />
                    <Text
                      style={{
                        width: 78,
                        fontSize: 13,
                        paddingTop: 10,
                        color: '#383838',
                      }}
                    >
                      {item.name}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>

            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>
                Billing Details
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 7,
                  padding: 10,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}
                  >
                    Item Total
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: '500' }}>
                    ₹{total}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 8,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}
                  >
                    Delivery Fee | 1.2Km
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      color: '#ff4500',
                    }}
                  >
                    FREE
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: '500', color: 'gray' }}
                  >
                    Free Delivery On Your Order
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: 'gray',
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: '500', color: 'gray' }}
                  >
                    Delivery Tip
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      color: '#FF4500',
                    }}
                  >
                    ADD TIP
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: '500', color: 'gray' }}
                  >
                    Taxes and Charges
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      color: '#FF4500',
                    }}
                  >
                    95
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: 'gray',
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 8,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    To Pay
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {total + 95}
                  </Text>
                </View>
              </View>
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
      {total === 0 ? null : (
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            marginBottom: 20,
            padding: 20,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              ₹{total + 95}
            </Text>
            <Text style={{ color: '#00A877', fontSize: 17 }}>
              View Detailed Bill
            </Text>
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate('Loading');
              dispatch(cleanCart());
            }}
            style={{
              backgroundColor: '#00A877',
              padding: 14,
              width: 200,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Proceed To pay
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});

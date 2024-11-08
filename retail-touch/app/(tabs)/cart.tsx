
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCartContext } from '@/context/CartContext';
import { Stack, useRouter } from 'expo-router';

export default function CartScreen() {
  const { cartItems, removeFromCart, totalPrice } = useCartContext();
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Cart' }} />
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <Text>Total: ${totalPrice}</Text>
        <TouchableOpacity onPress={() => router.push('/checkout')}>
          <Text>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
import { View, Text, TouchableOpacity } from 'react-native';
import { useCartContext } from '@/context/CartContext';
import { useOrdersContext } from '@/context/OrdersContext';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CheckoutScreen() {
  const { cartItems, totalPrice, clearCart } = useCartContext();
  const { addOrder } = useOrdersContext();
  const router = useRouter();

  const handleCheckout = () => {
    const newOrder = {
      id: Date.now().toString(),
      items: cartItems,
      total: totalPrice,
    };
    addOrder(newOrder);
    clearCart();
    router.replace('/orders');
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Checkout' }} />
      <View style={{ flex: 1, padding: 16 }}>
        <Ionicons name="cart-outline" size={100} color="black" />
        <Text>Order Summary:</Text>
        {/* ...display summary... */}
        <Text>Total: ${totalPrice}</Text>
        <TouchableOpacity onPress={handleCheckout}>
          <Text>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
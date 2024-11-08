
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCartContext } from '@/context/CartContext';
import { Stack } from 'expo-router';

export default function ProductsScreen() {
  const { addToCart } = useCartContext();
  const products = [
    { id: '1', name: 'Product 1', price: 10 },
    // ...more products...
  ];

  return (
    <>
      <Stack.Screen options={{ title: 'Products' }} />
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <Text>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
}
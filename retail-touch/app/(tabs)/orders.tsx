
import { View, Text, FlatList } from 'react-native';
import { useOrdersContext } from '@/context/OrdersContext';
import { Stack } from 'expo-router';

export default function OrdersScreen() {
  const { orders } = useOrdersContext();

  return (
    <>
      <Stack.Screen options={{ title: 'Orders' }} />
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <Text>Order #{item.id}</Text>
              <Text>Total: ${item.total}</Text>
              {/* ...display more details... */}
            </View>
          )}
        />
      </View>
    </>
  );
}
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Calculator from "./Calculator";

const ProductRoute = () => <Calculator />;

const CheckoutRoute = () => <Text>Checkout</Text>;

const CustomersRoute = () => <Text>Customers</Text>;

const SellerRoute = () => <Text>Seller</Text>;

const MoreRoute = () => <Text>more</Text>;

export const BottomNavigator = () => {
  // constants

  // states
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "product",
      title: "Product",
    },
    { key: "checkout", title: "Checkout" },
    { key: "customers", title: "Customers" },
    {
      key: "seller",
      title: "Seller",
    },
    {
      key: "more",
      title: "more",
    },
  ]);

  // useRef

  // hooks

  // internal private functions

  // useCallback

  // useEffect

  // handlers

  // internal functional components

  // return statement this

  const renderScene = BottomNavigation.SceneMap({
    product: ProductRoute,
    checkout: CheckoutRoute,
    customers: CustomersRoute,
    seller: SellerRoute,
    more: MoreRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

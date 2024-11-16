import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

const ProductFacia = () => (
  <View
    style={{
      padding: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }}
  >
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: "gray",
        borderRadius: 5,
      }}
    />
    {/* <Avatar.Image size={24} source={require('../assets/avatar.png')} /> */}
  </View>
);

const ProductButton = ({
  title,
  onPress,
  textStyle,
}: {
  title: string;
  onPress: () => void;
  textStyle?: any;
}) => (
  <Button
    mode="contained"
    onPress={onPress}
    style={{
      borderRadius: 5,
      backgroundColor: "rgb(189 186 186)",
    }}
  >
    <Text style={textStyle}>{title}</Text>
  </Button>
);

const ListItem = ({
  title,
  subtitle,
  onClick,
}: {
  title: string;
  subtitle: string;
  onClick?: () => void;
}) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      paddingBottom: 10,
    }}
    onPress={onClick}
  >
    <View>
      <Text>{title}</Text>
      <Text
        style={{
          color: "gray",
        }}
      >
        {subtitle}
      </Text>
    </View>
    <MaterialIcons name="keyboard-arrow-right" size={24} color="blue" />
  </TouchableOpacity>
);

export default function AddProduct() {
  // constants

  // states

  // useRef

  // hooks

  // internal private functions

  // useCallback

  // useEffect

  // handlers

  // internal functional components

  // return statement this
  return (
    <ScrollView
      style={{
        padding: 20,
      }}
    >
      <ProductFacia />
      <View style={styles.container}>
        <Text style={styles.TitleText}>Details</Text>
        <TextInput mode="outlined" label="Item name" />
        <Text>
          Scan a barcode with a connected scanner to auto-create the item
        </Text>
        <TextInput
          mode="outlined"
          label="Item Description"
          multiline
          numberOfLines={4}
        />
        <ProductButton
          title="Generate description"
          onPress={() => {}}
          textStyle={styles.btnText}
        />
        <ListItem
          title="Taxes"
          subtitle="No taxes available"
          onClick={() => {}}
        />
        <ListItem title="Categories" subtitle="None" onClick={() => {}} />
        <Text style={styles.TitleText}>Options</Text>
        <Text>
          Add options to your item such as size, color, or any other
          distinguishing features that you want to track.
          <TouchableOpacity>
            <Text style={styles.blueText}>Learn more</Text>
          </TouchableOpacity>
        </Text>
        <ProductButton
          title="Add Options"
          onPress={() => {}}
          textStyle={styles.btnText}
        />
        <Text style={styles.TitleText}>Price and inventory</Text>
        <TextInput
          mode="outlined"
          label="GTIN"
          placeholder="UPC, EAN or ISBN"
        />
        <TextInput mode="outlined" label="SKU" placeholder="UPC, EAN or ISBN" />
        <TextInput mode="outlined" label="Price" placeholder="₹ 0.00" />
        <View style={styles.sections}>
          <Text>Unit</Text>
          <TouchableOpacity>
            <Text style={styles.blueText}>Per item</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sections}>
          <Text>Stock</Text>
          <TouchableOpacity>
            <Text style={styles.blueText}>Manage stock</Text>
          </TouchableOpacity>
        </View>
        <ProductButton
          title="Add variation"
          onPress={() => {}}
          textStyle={styles.btnText}
        />
        <ProductButton
          title="Delete item"
          onPress={() => {}}
          textStyle={styles.redText}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sections: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 10,
  },
  blueText: {
    color: "blue",
    fontWeight: "bold",
  },
  container: {
    gap: 10,
  },
  TitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btnText: {
    color: "blue",
    fontWeight: "bold",
  },
  redText: {
    color: "red",
    fontWeight: "bold",
  },
});

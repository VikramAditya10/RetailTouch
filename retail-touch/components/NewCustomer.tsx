import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text
    style={{
      fontSize: 20,
      fontWeight: "bold",
    }}
  >
    {children}
  </Text>
);

export default function NewCustomer() {
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
        backgroundColor: "white",
      }}
      contentContainerStyle={{
        gap: 10,
      }}
    >
      <Title>New Customer</Title>
      <TouchableOpacity
        style={{
          backgroundColor: "rgb(211 204 204)",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "blue", fontWeight: "bold" }}>
          Import from Contacts
        </Text>
      </TouchableOpacity>
      <TextInput mode="outlined" label="First Name" />
      <TextInput mode="outlined" label="Last Name" />
      <TextInput mode="outlined" label="Phone Number" />
      <TextInput mode="outlined" label="Email Address" />
      <Title>Address</Title>
      <TextInput
        mode="outlined"
        label="Country"
        right={<TextInput.Icon icon="chevron-down" />}
      />
      <TextInput mode="outlined" label="Address Line 1" />
      <TextInput mode="outlined" label="Address Line 2" />
      <TextInput mode="outlined" label="City/Town" />
      <TextInput mode="outlined" label="Region" />
      <TextInput mode="outlined" label="Postcode" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Title>Groups</Title>
        <TouchableOpacity>
          <Text style={{ color: "blue", fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        mode="outlined"
        label="Appointment Norifications"
        right={<TextInput.Icon icon="chevron-down" />}
      />
      <TextInput mode="outlined" label="Company" />
      <TextInput mode="outlined" label="Reference ID" />
      <Title>Birthday</Title>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          mode="outlined"
          label="Month"
          right={<TextInput.Icon icon="chevron-down" />}
          style={{
            width: "48%",
          }}
        />
        <TextInput
          mode="outlined"
          label="Day"
          right={<TextInput.Icon icon="chevron-down" />}
          style={{ width: "48%" }}
        />
      </View>
      <TextInput mode="outlined" label="Year" />
    </ScrollView>
  );
}

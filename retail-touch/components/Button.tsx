import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Button({
  textValue,
  onClick,
}: {
  textValue: string;
  onClick: (value: string) => void;
}) {
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
    <TouchableOpacity
      style={{
        paddingVertical: 25,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        // maxWidth: "max-content",
      }}
      onPress={() => onClick(textValue)}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        {textValue}
      </Text>
    </TouchableOpacity>
  );
}

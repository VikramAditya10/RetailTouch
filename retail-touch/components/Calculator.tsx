import { BottomNavigator } from "@/components/BottomNavigation";
import Button from "@/components/Button";
import React, { useState } from "react";
import { TextInput, View } from "react-native";

export default function Calculator() {
  // constants

  // states
  const [inputValue, setInputValue] = useState<string>("");

  // useRef

  // hooks

  // internal private functions

  // useCallback

  // useEffect

  // handlers
  const handleButtonPress = (value: string) => {
    setInputValue((prev) => prev + value);
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleCalculate = () => {
    try {
      setInputValue(eval(inputValue));
    } catch (error) {
      setInputValue("Error");
    }
  };

  // internal functional components

  // return statement this
  return (
    <View
      style={{
        padding: 20,
        flexDirection: "column",
        gap: 20,
        flexGrow: 1,
        backgroundColor: "white",
      }}
    >
      <TextInput
        value={inputValue}
        autoFocus
        readOnly
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          fontSize: 46,
          borderRadius: 5,
          textAlign: "center",
          outline: "transparent",
          letterSpacing: 5,
        }}
      />
      <View
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gridGap: 10,
        }}
      >
        <Button textValue="1" onClick={handleButtonPress} />
        <Button textValue="2" onClick={handleButtonPress} />
        <Button textValue="3" onClick={handleButtonPress} />
        <Button textValue="4" onClick={handleButtonPress} />
        <Button textValue="5" onClick={handleButtonPress} />
        <Button textValue="6" onClick={handleButtonPress} />
        <Button textValue="7" onClick={handleButtonPress} />
        <Button textValue="8" onClick={handleButtonPress} />
        <Button textValue="9" onClick={handleButtonPress} />
        <Button textValue="0" onClick={handleButtonPress} />
        <Button textValue="+" onClick={handleButtonPress} />
        <Button textValue="-" onClick={handleButtonPress} />
        <Button textValue="/" onClick={handleButtonPress} />
        <Button textValue="*" onClick={handleButtonPress} />
        <Button textValue="=" onClick={handleCalculate} />
        <Button textValue="C" onClick={handleClear} />
      </View>
    </View>
  );
}

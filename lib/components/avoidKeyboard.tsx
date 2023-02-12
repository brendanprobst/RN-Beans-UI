import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Keyboard,
  Animated,
  Platform,
  TextInput,
} from "react-native";
import { useKeyboard } from "@react-native-community/hooks";
import { Dim } from "../../styles/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function AvoidKeyboard({ children }) {
  const [shift, setShift] = useState(new Animated.Value(0));
  const keyboard = useKeyboard();
  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", handleKeyboardDidShow);
    const hide = Keyboard.addListener("keyboardDidHide", handleKeyboardDidHide);
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);
  const handleKeyboardDidShow = () => {
    const KeyboardHeight = keyboard.keyboardHeight;
    const currentlyFocusedInputRef = TextInput.State.currentlyFocusedInput();
    currentlyFocusedInputRef.measure((x, y, width, height, pageX, pageY) => {
      const fieldHeight = keyboard.keyboardHeight;
      const fieldTop = pageY;
      let gap = 0;
      gap = Dim.height - KeyboardHeight - (fieldTop + fieldHeight);
      if (gap > 0) {
        return;
      }
      Animated.timing(shift, {
        toValue: gap ? gap : 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    });
  };
  const handleKeyboardDidHide = () => {
    Animated.timing(shift, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  //android
  if (Platform.OS === "android") {
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateY: shift }] }}>
        {children}
      </Animated.View>
    );
  }
  //IOS
  const headerHeight = 0;
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={0}
      style={{ flex: 1 }}
      behavior={"padding"}
    >
      {children}
    </KeyboardAvoidingView>
  );
}

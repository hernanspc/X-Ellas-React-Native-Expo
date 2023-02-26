import * as React from "react";
import { useColorScheme, View as DefaultView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function View(props) {
  const theme = useColorScheme();
  const { style, ...otherProps } = props;
  return (
    <DefaultView
      style={[
        { paddingHorizontal: 17 },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function ViewThemed(props) {
  const theme = useColorScheme();
  const { style, children, ...otherProps } = props;
  return (
    <KeyboardAwareScrollView
      style={[
        { paddingHorizontal: 17 },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}

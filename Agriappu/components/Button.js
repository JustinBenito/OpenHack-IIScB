import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Button1 = ({ style }) => {
  return (
    <Pressable style={[styles.button, style]}>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Text style={styles.cropid}>Crop.Id</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    borderRadius: Border.br_11xs,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  cropid: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_500,
    textAlign: "left",
    marginTop: 10,
  },
  button: {
    borderRadius: Border.br_7xs,
    width: 57,
    height: 55,
    padding: Padding.p_6xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button1;

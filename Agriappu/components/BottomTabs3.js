import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const BottomTabs3 = ({ style }) => {
  return <View style={[styles.bottomTabs, style, styles.iconHomeFlexBox]} />;
};

const styles = StyleSheet.create({
  iconHomeFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  connectTypo: {
    marginTop: 7,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  bottomTabs: {
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: Padding.p_41xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default BottomTabs3;

import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const IconHome1 = ({ style }) => {
  return (
    <View style={[styles.iconHome, style]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector41.png")}
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 34,
    height: 30,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.orange,
    textAlign: "left",
    marginTop: 6,
  },
  iconHome: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    alignItems: "center",
  },
});

export default IconHome1;

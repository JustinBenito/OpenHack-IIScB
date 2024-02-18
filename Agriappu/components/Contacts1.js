import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Contacts1 = ({ style }) => {
  return (
    <View style={[styles.contacts, style]}>
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user-icon.png")}
      />
      <Text style={styles.connect}>Connect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userIcon: {
    width: 18,
    height: 20,
  },
  connect: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.black,
    textAlign: "left",
    marginTop: 7,
  },
  contacts: {
    width: 50,
    alignItems: "center",
  },
});

export default Contacts1;

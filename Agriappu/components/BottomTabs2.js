import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const BottomTabs2 = ({ style }) => {
  return (
    <View style={[styles.bottomTabs, style, styles.iconHomeFlexBox]}>
      <View style={styles.contact}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user-icon1.png")}
        />
        <Text style={[styles.connect, styles.connectTypo]}>Connect</Text>
      </View>
      <View style={styles.contact}>
        <Image
          style={styles.chatIcon}
          contentFit="cover"
          source={require("../assets/chat-icon1.png")}
        />
        <Text style={[styles.uzhavan, styles.connectTypo]}>Uzhavan</Text>
      </View>
    </View>
  );
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
  userIcon: {
    width: 18,
    height: 20,
  },
  connect: {
    color: Color.gray_300,
  },
  contact: {
    width: 50,
    alignItems: "center",
  },
  chatIcon: {
    width: 20,
    height: 20,
  },
  uzhavan: {
    color: Color.black,
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

export default BottomTabs2;

import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const BottomTabs = ({ style }) => {
  return (
    <View style={[styles.bottomTabs, style, styles.iconHomeFlexBox]}>
      <View style={[styles.iconHome, styles.iconHomeFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4@3x.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      </View>
      <Pressable style={styles.button}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/vector4@3x.png")}
        />
        <Text style={[styles.cropid, styles.homeTypo]}>Crop.Id</Text>
      </Pressable>
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
  vectorIcon: {
    width: 34,
    height: 30,
  },
  home: {
    color: Color.gray_400,
    marginTop: 6,
  },
  iconHome: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    alignItems: "center",
  },
  frameIcon: {
    borderRadius: Border.br_11xs,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  cropid: {
    color: Color.gray_500,
    marginTop: 10,
  },
  button: {
    borderRadius: Border.br_7xs,
    width: 57,
    height: 55,
    padding: Padding.p_6xs,
    justifyContent: "center",
    alignItems: "center",
  },
  chatIcon: {
    width: 20,
    height: 20,
  },
  uzhavan: {
    color: Color.black,
  },
  contact: {
    width: 50,
    alignItems: "center",
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

export default BottomTabs;

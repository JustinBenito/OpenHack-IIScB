import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Chats11 = ({ style }) => {
  return (
    <View style={[styles.chats, style]}>
      <Image
        style={styles.chatIcon}
        contentFit="cover"
        source={require("../assets/chat-icon11.png")}
      />
      <Text style={styles.uzhavan}>Uzhavan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatIcon: {
    width: 20,
    height: 20,
  },
  uzhavan: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.orange,
    textAlign: "left",
    marginTop: 7,
  },
  chats: {
    width: 50,
    alignItems: "center",
  },
});

export default Chats11;

import * as React from "react";
import { View, StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TopHeader4 = ({ style }) => {
  return (
    <SafeAreaView>
      <View style={styles.viewFlexBox}>
        <View style={[styles.header, styles.viewFlexBox]}>
          <Text style={styles.connect}>Connect</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    height: 65,
    alignSelf: "stretch",
  },
  connect: {
    flex: 1,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.white,
    textAlign: "center",
  },
  header: {
    backgroundColor: Color.darkgreen,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
    flexDirection: "row",
  },
});

export default TopHeader4;

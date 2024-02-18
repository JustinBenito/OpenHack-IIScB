import * as React from "react";
import { View, StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TopHeader3 = ({ style }) => {
  return (
    <SafeAreaView>
      <View style={[styles.view, styles.viewFlexBox1]}>
        <View style={[styles.header, styles.viewFlexBox1]}>
          <Text style={styles.farconnect}>FarConnect</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewFlexBox1: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  farconnect: {
    fontSize: FontSize.size_29xl,
    fontFamily: FontFamily.styleScriptRegular,
    color: Color.white,
    textAlign: "center",
    flex: 1,
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
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
  },
  view: {
    height: 67,
  },
});

export default TopHeader3;

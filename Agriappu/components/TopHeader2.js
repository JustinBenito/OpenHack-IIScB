import * as React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const TopHeader2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.viewFlexBox2}>
        <View style={styles.topHeader}>
          <View style={[styles.backButtonParent, styles.viewFlexBox2]}>
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </Pressable>
            <View style={styles.user}>
              <View style={styles.details}>
                <Text style={styles.farconnect}>FarConnect</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <Image
                style={styles.profileIcon}
                contentFit="cover"
                source={require("../assets/profile2.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewFlexBox2: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 10,
    height: 17,
  },
  backButton: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gray_100,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  farconnect: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.gray_200,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 94,
    alignItems: "center",
  },
  details: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  user: {
    height: 45,
    alignItems: "center",
    flexDirection: "row",
  },
  profileIcon: {
    width: 38,
    height: 38,
  },
  buttons: {
    flexDirection: "row",
  },
  backButtonParent: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    overflow: "hidden",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_4xs,
  },
  topHeader: {
    width: 395,
    alignSelf: "stretch",
  },
});

export default TopHeader2;

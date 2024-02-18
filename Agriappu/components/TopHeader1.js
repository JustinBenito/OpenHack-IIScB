import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const TopHeader1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.backButtonParent}>
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
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile1.png")}
            />
            <View style={styles.details}>
              <Text style={[styles.agriConnect24, styles.onlineNowTypo]}>
                Agri Connect ‘24
              </Text>
              <Text style={[styles.onlineNow, styles.onlineNowTypo]}>
                Online now
              </Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <View style={styles.video}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
            </View>
            <View style={styles.call}>
              <Image
                style={styles.vectorIcon2}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  onlineNowTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  vectorIcon: {
    width: 10,
    height: 17,
  },
  backButton: {
    backgroundColor: Color.gray_100,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
  },
  profileIcon: {
    width: 38,
    height: 38,
  },
  agriConnect24: {
    fontSize: FontSize.size_sm,
    color: Color.gray_200,
    width: 119,
  },
  onlineNow: {
    fontSize: FontSize.size_3xs,
    color: Color.green,
    marginTop: 4,
  },
  details: {
    marginLeft: 20,
  },
  user: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon1: {
    height: 12,
    width: 16,
  },
  video: {
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_smi,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.white,
  },
  vectorIcon2: {
    height: 16,
    width: 16,
  },
  call: {
    padding: Padding.p_2xs,
    marginLeft: 6,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  buttons: {
    flexDirection: "row",
  },
  backButtonParent: {
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
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  view: {
    alignSelf: "stretch",
  },
});

export default TopHeader1;

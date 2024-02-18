import * as React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FontSize, Padding, Color, FontFamily, Border } from "../GlobalStyles";

const ChatView = () => {
  return (
    <SafeAreaView style={styles.cropId}>
      <View style={styles.imageParent}>
        <View style={styles.imageLayout}>
          <View style={styles.imageInner}>
            <View style={styles.imageLayout}>
              <View style={[styles.rectangleWrapper, styles.imageLayout]}>
                <View style={styles.frameChild} />
              </View>
              <View style={styles.upload}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Text style={[styles.uploadCropImage, styles.identifyTypo]}>
                  Upload Crop Image
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.identifyWrapper}>
          <Text style={[styles.identify, styles.identifyTypo]}>Identify</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  identifyTypo: {
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  imageLayout: {
    height: 240,
    width: 395,
  },
  frameChild: {
    borderStyle: "dashed",
    borderColor: "#000",
    borderRadius: 0.001,
    borderWidth: 2,
    alignSelf: "stretch",
    flex: 1,
  },
  rectangleWrapper: {
    top: 0,
    left: 0,
    padding: Padding.p_3xs,
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
  },
  vectorIcon1: {
    width: 61,
    height: 61,
  },
  uploadCropImage: {
    color: Color.black,
    marginTop: 7,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  upload: {
    marginLeft: -74,
    bottom: 92,
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  imageInner: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  identify: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray_100,
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  identifyWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.green,
    paddingHorizontal: Padding.p_30xl,
    paddingVertical: Padding.p_smi,
    marginTop: 19,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  imageParent: {
    marginTop: 176,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  cropId: {
    width: "100%",
    height: 754,
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ChatView;

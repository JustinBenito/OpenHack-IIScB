import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Border, Color } from "../GlobalStyles";

const ChatView1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.chatView}>
      <ScrollView
        style={styles.chatlist}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.chatListScrollViewContent}
      >
        <Pressable
          style={[styles.chat, styles.chatFlexBox]}
          onPress={() => navigation.navigate("ChatRoom")}
        >
          <View style={[styles.profile, styles.chatFlexBox]}>
            <Image
              style={styles.profileimageIcon}
              contentFit="cover"
              source={require("../assets/profileimage.png")}
            />
            <View style={styles.chat1}>
              <Text style={styles.name}>Agri Connect ‘24</Text>
              <Text style={styles.preview} />
            </View>
          </View>
          <View style={styles.details}>
            <Text style={[styles.time, styles.timeTypo]}>2 min ago</Text>
            <LinearGradient
              style={styles.notificationSpaceBlock}
              locations={[0, 1]}
              colors={["#87ff5e", "#269200"]}
            >
              <Text style={[styles.text, styles.timeTypo]}>1</Text>
            </LinearGradient>
          </View>
        </Pressable>
        <Pressable style={[styles.chat, styles.chatFlexBox]}>
          <View style={[styles.profile, styles.chatFlexBox]}>
            <Image
              style={styles.profileimageIcon}
              contentFit="cover"
              source={require("../assets/profileimage1.png")}
            />
            <View style={styles.chat1}>
              <Text style={styles.name}>
                Tamil Nadu Agriculture Farming Association
              </Text>
              <Text style={styles.preview}>
                member to turn in the assignment!
              </Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={[styles.time, styles.timeTypo]}>2 min ago</Text>
            <LinearGradient
              style={[styles.notification1, styles.notificationSpaceBlock]}
              locations={[0, 1]}
              colors={["#ffa925", "#ff7841"]}
            >
              <Text style={[styles.text, styles.timeTypo]}>1</Text>
            </LinearGradient>
          </View>
        </Pressable>
        <Pressable style={[styles.chat, styles.chatFlexBox]}>
          <View style={[styles.profile, styles.chatFlexBox]}>
            <Image
              style={styles.profileimageIcon}
              contentFit="cover"
              source={require("../assets/profileimage2.png")}
            />
            <View style={styles.chat1}>
              <Text style={styles.name}>Nel, Cholam, Parupu</Text>
              <Text style={styles.preview}>wow that’s awesome</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={[styles.time, styles.timeTypo]}>2 min ago</Text>
            <LinearGradient
              style={[styles.notification1, styles.notificationSpaceBlock]}
              locations={[0, 1]}
              colors={["#ffa925", "#ff7841"]}
            >
              <Text style={[styles.text, styles.timeTypo]}>1</Text>
            </LinearGradient>
          </View>
        </Pressable>
        <Pressable style={[styles.chat, styles.chatFlexBox]}>
          <View style={[styles.profile, styles.chatFlexBox]}>
            <Image
              style={styles.profileimageIcon}
              contentFit="cover"
              source={require("../assets/profileimage3.png")}
            />
            <View style={styles.chat1}>
              <Text style={styles.name}>Kadaisi Vivasayi</Text>
              <Text style={styles.preview}>Burhan was looking for you</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={[styles.time, styles.timeTypo]}>2 min ago</Text>
            <LinearGradient
              style={[styles.notification1, styles.notificationSpaceBlock]}
              locations={[0, 1]}
              colors={["#ffa925", "#ff7841"]}
            >
              <Text style={[styles.text, styles.timeTypo]}>1</Text>
            </LinearGradient>
          </View>
        </Pressable>
        <Pressable style={[styles.chat, styles.chatFlexBox]}>
          <View style={[styles.profile, styles.chatFlexBox]}>
            <Image
              style={styles.profileimageIcon}
              contentFit="cover"
              source={require("../assets/profileimage4.png")}
            />
            <View style={styles.chat1}>
              <Text style={styles.name}>Plant Doctors</Text>
              <Text style={styles.preview}>you there? need some help</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={[styles.time, styles.timeTypo]}>2 min ago</Text>
            <LinearGradient
              style={[styles.notification1, styles.notificationSpaceBlock]}
              locations={[0, 1]}
              colors={["#ffa925", "#ff7841"]}
            >
              <Text style={[styles.text, styles.timeTypo]}>1</Text>
            </LinearGradient>
          </View>
        </Pressable>
        <Pressable style={[styles.chat, styles.chatFlexBox]}>
          <View style={[styles.profile, styles.chatFlexBox]}>
            <Image
              style={styles.profileimageIcon}
              contentFit="cover"
              source={require("../assets/profileimage5.png")}
            />
            <View style={styles.chat1}>
              <Text style={styles.name}>Organic Farming</Text>
              <Text style={styles.preview}>take care :)</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={[styles.time, styles.timeTypo]}>2 min ago</Text>
            <LinearGradient
              style={[styles.notification1, styles.notificationSpaceBlock]}
              locations={[0, 1]}
              colors={["#ffa925", "#ff7841"]}
            >
              <Text style={[styles.text, styles.timeTypo]}>1</Text>
            </LinearGradient>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatListScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  notificationSpaceBlock: {
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_8xs,
    height: 16,
    width: 16,
    borderRadius: Border.br_31xl,
    marginTop: 4,
    overflow: "hidden",
    alignItems: "center",
  },
  profileimageIcon: {
    width: 42,
    height: 42,
  },
  name: {
    fontSize: FontSize.size_sm,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  preview: {
    color: Color.orange,
    marginTop: 4,
    display: "none",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  chat1: {
    marginLeft: 12,
    flex: 1,
  },
  profile: {
    flex: 1,
  },
  time: {
    color: Color.gray300,
  },
  text: {
    color: Color.gray_100,
  },
  details: {
    alignItems: "flex-end",
    marginLeft: 10,
  },
  chat: {
    borderStyle: "solid",
    borderColor: "#f5f5f5",
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_lgi,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  notification1: {
    display: "none",
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_8xs,
    height: 16,
    width: 16,
    borderRadius: Border.br_31xl,
  },
  chatlist: {
    marginTop: 19,
    alignSelf: "stretch",
    flex: 1,
  },
  chatView: {
    width: "100%",
    height: 703,
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ChatView1;

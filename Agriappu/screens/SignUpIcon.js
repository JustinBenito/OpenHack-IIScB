import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import{createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUpIcon = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onHandleSignin1 = () => {
    if(email!=='' && password!==''){
createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
  console.log('Sigin done');
  navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
    })
    .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
  console.log(error)
    });

    }
  }

  return (
    <ImageBackground
      style={[styles.signUpIcon, styles.signUpIconFlexBox]}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <View style={styles.login}>
        <View style={styles.signUpParentFlexBox}>
          <Text style={styles.signUp}>Sign Up</Text>
          <View style={styles.form}>
            <View style={[styles.emailInput, styles.inputShadowBox]}>
              <View style={[styles.frameParent, styles.signUpIconFlexBox]}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame5.png")}
                />
                <TextInput
                  style={[styles.albertomailcom, styles.textFlexBox]}
                  placeholder="Email"
                  keyboardType="default"
                  placeholderTextColor="#262626"
                  onChangeText={e=>setEmail(e)}
                  value={email}
                  />
              
              </View>
            </View>
            <View style={[styles.passwordInput, styles.inputShadowBox]}>
              <View style={styles.frameGroup}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame11.png")}
                />
                 <TextInput
                 style={[styles.text, styles.textFlexBox]}
                 placeholder="Password"
              keyboardType="default"
              secureTextEntry
              placeholderTextColor="#262626"
              onChangeText={e=>setPassword(e)}
              value={password}
                 />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.bottomSection, styles.signUpParentFlexBox]}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() =>
              onHandleSignin1()
              
            }
          >
            <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
          </Pressable>
          <View style={[styles.prompt, styles.buttonFlexBox]}>
            <Text style={styles.loginHere1Typo}>
              <Text style={styles.doYouHave}>Do you have an account?</Text>
              <Text style={styles.text1}>{` `}</Text>
            </Text>
            <Pressable
              style={styles.loginHere}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles.loginHere1, styles.loginHere1Typo]}>
                Login here
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signUpIconFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  inputShadowBox: {
    paddingHorizontal: Padding.p_xl,
    elevation: 22,
    shadowRadius: 22,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
  },
  textFlexBox: {
    marginLeft: 22,
    height: 13,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.gray_200,
    flex: 1,
  },
  signUpParentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  signUp1Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  loginHere1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  signUp: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.green,
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  albertomailcom: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  emailInput: {
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
  },
  frameGroup: {
    width: 273,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    paddingVertical: Padding.p_lgi,
    marginTop: 24,
  },
  form: {
    width: 313,
    marginTop: 69,
  },
  signUp1: {
    fontSize: FontSize.size_lg,
    color: Color.gray_100,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.green,
    width: 317,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_lg,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  doYouHave: {
    color: Color.gray_200,
  },
  text1: {
    color: Color.seagreen,
  },
  loginHere1: {
    color: Color.green,
  },
  loginHere: {
    marginLeft: 5,
  },
  prompt: {
    marginTop: 20,
  },
  bottomSection: {
    marginTop: 78,
  },
  login: {
    borderTopLeftRadius: Border.br_41xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_36xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
    alignItems: "center",
  },
  signUpIcon: {
    width: "100%",
    height: 812,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default SignUpIcon;

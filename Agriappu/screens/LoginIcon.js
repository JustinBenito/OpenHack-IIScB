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
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginIcon = () => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onHandleLogin = () => {
    if(email!=='' && password!==''){
       signInWithEmailAndPassword(auth, email, password)
       .then(()=>{
        navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
       })
    }
  }

  return (
    <ImageBackground
      style={[styles.loginIcon, styles.loginIconFlexBox]}
      resizeMode="cover"
      source={require("../assets/login1.png")}
    >
      <View style={styles.login}>
        <View style={styles.logInParent}>
          <Text style={styles.logIn}>Log In</Text>
          <View style={styles.form}>
            <View style={[styles.emailInput, styles.inputShadowBox]}>
              <View style={[styles.frameParent, styles.loginIconFlexBox]}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <TextInput
                  style={[styles.albertomailcom, styles.textFlexBox]}
                  placeholder="Email Address"
                  keyboardType="default"
                  placeholderTextColor="#a4a4a4"
                  onChangeText={e=>setEmail(e)}
                  value={email}
                  />
              </View>
            </View>
            <View style={styles.passwordSection}>
              <View style={[styles.passwordInput, styles.inputShadowBox]}>
                <View style={styles.frameGroup}>
                  <Image
                    style={styles.frameIcon}
                    contentFit="cover"
                    source={require("../assets/frame3.png")}
                  />
                  <TextInput
                    style={[styles.text, styles.textFlexBox]}
                    placeholder="Password"
                    keyboardType="default"
                    secureTextEntry
                    placeholderTextColor="#a4a4a4"
                    onChangeText={e=>setPassword(e)}
                    value={password}
                  />
                </View>
              </View>
              <Text style={[styles.forgotPassword, styles.text1Typo]}>
                Forgot password
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() =>onHandleLogin()
              
            }
          >
            <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
          </Pressable>
          <View style={[styles.prompt, styles.buttonFlexBox]}>
            <Text style={[styles.dontHaveAn, styles.text1Typo]}>
              Don’t have an account?
            </Text>
            <Pressable
              style={styles.signUpHereContainer}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.text1Typo}>
                <Text style={styles.text2}>{` `}</Text>
                <Text style={styles.signUpHere}>Sign up here</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginIconFlexBox: {
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
    height: 18,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.gray_200,
    flex: 1,
  },
  text1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  login1Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  logIn: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.green,
  },
  frameIcon: {
    width: 24,
    overflow: "hidden",
    height: 24,
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
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    paddingVertical: Padding.p_lgi,
  },
  forgotPassword: {
    marginTop: 6,
    color: Color.green,
  },
  passwordSection: {
    alignItems: "flex-end",
    marginTop: 24,
    alignSelf: "stretch",
  },
  form: {
    width: 313,
    marginTop: 69,
  },
  logInParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  login1: {
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
  dontHaveAn: {
    color: Color.gray_200,
    fontSize: FontSize.size_xs,
  },
  text2: {
    color: Color.seagreen,
  },
  signUpHere: {
    color: Color.green,
  },
  signUpHereContainer: {
    marginLeft: 5,
  },
  prompt: {
    marginTop: 20,
  },
  bottomSection: {
    marginTop: 78,
    alignSelf: "stretch",
    alignItems: "center",
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
  loginIcon: {
    width: "100%",
    height: 812,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default LoginIcon;

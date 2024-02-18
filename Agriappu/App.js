const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginIcon from "./screens/LoginIcon";
import ChatView from "./screens/ChatView";
import ChatRoom from "./screens/ChatRoom";
import HomePage from "./screens/HomePage";
import ChatRoom1 from "./screens/ChatRoom1";
import ChatView1 from "./screens/ChatView1";
import SignUpIcon from "./screens/SignUpIcon";
import Contacts1 from "./components/Contacts1";
import Chats from "./components/Chats";
import Contacts from "./components/Contacts";
import TopHeader4 from "./components/TopHeader4";
import TopHeader3 from "./components/TopHeader3";
import TopHeader from "./components/TopHeader";
import TopHeader2 from "./components/TopHeader2";
import TopHeader1 from "./components/TopHeader1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Contacts1 />,
    <Chats />,
    <Contacts />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Contacts1 />,
    <Chats />,
    <Contacts />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fff",
              height: 67,
              flexDirection: "row",
              paddingHorizontal: 60,
              paddingVertical: 15,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="ChatView"
        component={ChatView1}
        options={(props) => ({
          headerShown: true,
          header: () => <TopHeader4 />,
        })}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={(props) => ({
          headerShown: true,
          header: () => <TopHeader3 />,
        })}
      />
      <Tab.Screen
        name="AiChatRoom"
        component={ChatRoom}
        options={(props) => ({
          headerShown: true,
          header: () => <TopHeader />,
        })}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    "Style Script_regular": require("./assets/fonts/Style_Script_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_black: require("./assets/fonts/Inter_black.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Login"
              component={LoginIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CropId"
              component={ChatView}
              options={(props) => ({
                headerShown: true,
                header: () => <TopHeader2 />,
              })}
            />
            <Stack.Screen
              name="ChatRoom"
              component={ChatRoom1}
              options={(props) => ({
                headerShown: true,
                header: () => <TopHeader1 />,
              })}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpIcon}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

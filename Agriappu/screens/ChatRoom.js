import * as React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import translate from 'translate-google-api';
import { SafeAreaView } from "react-native-safe-area-context";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import axios from 'axios';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';

import { auth, database } from '../firebase';
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import { async } from "@firebase/util";
import * as Fonts from 'expo-font';
import { useFonts } from 'expo-font';

const ChatRoom = () => {
  const [messages, setMessages] = React.useState([]);
  const [loaded, error] = useFonts({
    TamilFont: require('../assets/fonts/Tamil.ttf'),
  });

  React.useEffect(() => {
    const collectionRef = collection(database, 'uzhavan');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().tamil,
          user: doc.data().user,
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const onSend = newMessages => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );

    const { _id, createdAt, text, user } = newMessages[0];

    addDoc(collection(database, 'uzhavan'), {
      _id,
      createdAt,
      tamil: text,
      user,
    }).catch(e => console.error(e));

    reply(text);
  };

  const reply = async question => {
    const response = await axios.get(`http://127.0.0.1:8000/uzhavan?q=${question}`);
    const text = response.data.res.response;
    const result = await translate(text, {
      from: 'en',
      to: 'ta',
    });
    const tamil = result.toString();

    const _id = Math.random();
    const createdAt = new Date();

    const user = {
      _id: 'uzhavan@rmkec.ac.in',
    };

    addDoc(collection(database, 'uzhavan'), {
      _id,
      createdAt,
      tamil,
      user,
    }).catch(e => console.error(e));
  };

  if (!loaded) {
    // Font is still loading, you can display a loading indicator here
    return null;
  }

  if (error) {
    // Failed to load the font, you can handle the error here
    console.error('Failed to load font:', error);
    return null;
  }

  return (
    <SafeAreaView style={styles.aiChatroom}>
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        renderBubble={props => (
          <Bubble
            {...props}
            textStyle={{
              fontFamily: 'TamilFont',
            }}
          />
        )}
        onSend={messages => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatSectionScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aiTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  chatFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  messageFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loremTypo: {
    width: 152,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  bubbleFlexBox: {
    backgroundColor: Color.green,
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_mid,
    borderRadius: Border.br_xl,
    left: "50%",
    top: "50%",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  loremIpsumDolor: {
    color: Color.gray_200,
  },
  bubbleMessage: {
    marginTop: -302.43,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_mid,
    borderRadius: Border.br_xl,
    left: "50%",
    top: "50%",
    marginLeft: -166.5,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: Color.gray100,
  },
  bubbleMessage1: {
    marginTop: -150.43,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_mid,
    borderRadius: Border.br_xl,
    left: "50%",
    top: "50%",
    marginLeft: -166.5,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: Color.gray100,
  },
  bubbleMessage2: {
    marginTop: -74.43,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_mid,
    borderRadius: Border.br_xl,
    left: "50%",
    top: "50%",
    marginLeft: -166.5,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: Color.gray100,
  },
  loremIpsumDolor3: {
    color: Color.white,
  },
  bubbleMessage3: {
    marginTop: -226.43,
    marginLeft: -15.5,
  },
  bubbleMessage4: {
    marginTop: 1.57,
    marginLeft: -12.5,
  },
  chatBubbles: {
    height: 676,
  },
  chatSection: {
    flex: 1,
  },
  askSomething: {
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    flex: 1,
  },
  vectorIcon3: {
    width: 12,
    height: 19,
  },
  button: {
    paddingHorizontal: Padding.p_smi,
    marginLeft: 10,
    backgroundColor: Color.gray100,
    justifyContent: "center",
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_4xs,
  },
  messageArea: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_2xl,
    backgroundColor: Color.gray_100,
    alignSelf: "stretch",
  },
  aiChatroom: {
    width: "100%",
    height: 812,
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ChatRoom;

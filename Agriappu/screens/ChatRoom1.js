import * as React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GiftedChat } from "react-native-gifted-chat";
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

const ChatRoom1 = () => {

  const [messages, setMessages] = React.useState([]);
  const [avatar_url, setAvatar]=React.useState('');

  React.useEffect(() => {
     setAvatar('https://i.pravatar.cc/300');
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.id, // Use Firestore document ID as the key
          createdAt: new Date(),
          text: doc.data().text,
          user: doc.data().user
        }))
      );
    });
    return () => unsubscribe();
  }, []);
  

  const onSend = (newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );
  
    const { _id, createdAt, text, user } = newMessages[0];
  
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user
    }).catch(e => console.error(e));
  };
  
  


  return (
    <SafeAreaView style={styles.chatRoom}>
            <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email,
          avatar: avatar_url
        }}
      />
      {/* <ScrollView
        style={[styles.chatSection, styles.chatFlexBox]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.chatSectionScrollViewContent}
      >
        <View style={[styles.chatBubbles, styles.chatFlexBox]}>
          <View style={[styles.bubbleMessage, styles.messageFlexBox]}>
            <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
          <View style={[styles.bubbleMessage1, styles.messageFlexBox]}>
            <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
          <View style={[styles.bubbleMessage2, styles.messageFlexBox]}>
            <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
          <View style={[styles.bubbleMessage3, styles.bubbleFlexBox]}>
            <Text style={[styles.loremIpsumDolor3, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
          <View style={[styles.bubbleMessage4, styles.bubbleFlexBox]}>
            <Text style={[styles.loremIpsumDolor3, styles.loremTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.messageArea, styles.messageFlexBox]}>
        <TextInput
          style={[styles.typeSomething, styles.onlineNowTypo]}
          placeholder="Type something.."
          keyboardType="default"
          placeholderTextColor="#262626"
          value={dwa}
        />
        
        <View style={[styles.button, styles.messageFlexBox]}>
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatSectionScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  onlineNowTypo: {
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
    marginLeft: -167,
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
    marginLeft: -167,
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
    marginLeft: -167,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: Color.gray100,
  },
  loremIpsumDolor3: {
    color: Color.white,
  },
  bubbleMessage3: {
    marginTop: -226.43,
    marginLeft: -16,
  },
  bubbleMessage4: {
    marginTop: 1.57,
    marginLeft: -13,
  },
  chatBubbles: {
    height: 676,
  },
  chatSection: {
    flex: 1,
  },
  typeSomething: {
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
  chatRoom: {
    width: "100%",
    height: 842,
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ChatRoom1;

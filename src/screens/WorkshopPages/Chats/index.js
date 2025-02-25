import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"
import { COLORS } from '../../../enums/StyleEnums';
import { IMAGES } from '../../../assets/images';
import { WorkerChatData } from '../../../constents';

const Chats = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [chatData, setChatData] = useState(WorkerChatData);

  useEffect(() => {
    // Check if new data is passed via navigation
    if (route.params?.newChat) {
      const newChat = route.params.newChat;
      setChatData((prevChats) => [
        ...prevChats,
        {
          id: prevChats.length + 1, // Generate a new unique ID
          name: newChat.name,
          discription: newChat.discription,
          time: newChat.time,
          image: newChat.image || IMAGES.AutoLogo1, // Default image if none provided
        },
      ]);

      navigation.setParams({ newChat: null });
    }
  }, [route.params?.newChat]);

  const ChatsRender = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("ChatScreen", { item })}
        style={styles.chatButton}>
        <Image style={styles.profileImage} source={item.image} />
        <View style={styles.innerView}>
          <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.discriptionText}>{item.discription}</Text>
          </View>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity 
        // onPress={()=>navigation.openDrawer()}
        style={styles.button}>
          <Ionicons name="menu-outline" color={COLORS.black} size={30} />
        </TouchableOpacity>
        <Text style={styles.text}>Chats</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
          <Image style={styles.img} source={IMAGES.PROFILES} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={chatData}
          renderItem={ChatsRender}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingTop: "3%", paddingBottom: "15%" }}
        />
      </View>
    </View>
  );
}
export default Chats;
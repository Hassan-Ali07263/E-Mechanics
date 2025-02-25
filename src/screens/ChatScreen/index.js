import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import { IMAGES } from '../../assets/images';
import { ChatDetail } from '../../constents';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import { COLORS } from '../../enums/StyleEnums';
import Feather from "react-native-vector-icons/Feather";

const ChatScreen = ({ route }) => {
  const navigation=useNavigation();
  const [message,setMessage]=useState('');
  const RenderChats=({item})=>{
    return(
      <View style={[item.sender === "me" ? styles.messageView:styles.messageViewOther]}>
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.timeText}>08:00 pm</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>

      <View style={styles.headerView}>
        <TouchableOpacity onPress={()=>navigation.goBack()}
        style={styles.backButton}>
          <Image style={styles.backImage} resizeMode='contain' source={IMAGES.Back} />
          <Image style={styles.shopLogo} resizeMode='contain' source={route.params.item.image} />
        </TouchableOpacity>
        <Text style={styles.workshopName}>{route?.params?.item?.name}</Text>
      </View>

      <View style={{flex:1}}>
      <FlatList
      data={ChatDetail}
      renderItem={RenderChats}
      contentContainerStyle={{marginHorizontal:"3%"}}
      />
      </View>

      <View style={styles.messageSendView}>
      <Input ph={"Start typing here..."} phc={COLORS.grey_1} value={message} onChangeText={(text)=>setMessage(text)} height={52} width={"83%"} background={COLORS.white} color={COLORS.black} paddingHorizontal={"5%"} borderRadius={30} alignSelf={"center"}/>
      <TouchableOpacity style={styles.sendButton}>
        <Feather name="send" size={25} color={COLORS.black} />
      </TouchableOpacity>
      </View>      
    </View>
  );
}
export default ChatScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, FONTS } from '../enums/StyleEnums';
import Input from './Input';
import Buttons from './Buttons';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../assets/images';
import { isStrongPassword } from '../utils/Helper';

const User = () => {

  const navigation = useNavigation();

  const [username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [userNameErr, setUserNameErr] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNext = () => {
    // Validate email
    if (username.trim() === '') {
      setUserNameErr('Please enter your username');
      return;
    }
    setUserNameErr('');

    // Validate password
    if (Password.trim() === '') {
      setPasswordError('Please enter your password');
      return;
    }
    if (!isStrongPassword(Password)) {
      setPasswordError(
        'Password must be at least 6 characters long, include one capital letter, one number, and one special character.'
      );
      return;
    }
    setPasswordError('');

    // Navigate if all inputs are valid
    navigation.navigate("BottomTabs");
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>User Login</Text>
      <Input ph={"Username"} phc={COLORS.black} width={"100%"} height={46} paddingHorizontal={20} color={COLORS.black} background={COLORS.inputyellow} value={username} onChangeText={(text) => setUserName(text)} borderRadius={10} elevation={5} shadowopacity={1} marginTop={5} />
      {userNameErr && (
        <View style={[styles.ErrorSection]}>
          <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
          <Text style={styles.ErrorText}>{userNameErr}</Text>
        </View>
      )}
      <Input ph={"Password"} phc={COLORS.black} width={"100%"} height={46} paddingHorizontal={20} color={COLORS.black} background={COLORS.inputyellow} value={Password} onChangeText={(text) => setPassword(text)} borderRadius={10} elevation={5} shadowopacity={1} marginTop={15} secureText={true} />
      {passwordError && (
        <View style={[styles.ErrorSection]}>
          <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
          <Text style={styles.ErrorText}>{passwordError}</Text>
        </View>
      )}
      <Buttons onPress={()=>navigation.navigate("UserForgetPassword")} title={"Forgot password?"} color={COLORS.lightblue} fontFamily={FONTS.regular} fontSize={14} alignSelf={"flex-end"} marginTop={10} />
      <Buttons onPress={handleNext} backgroundColor={COLORS.white} title={"LOG IN"} height={44} width={"50%"} fontFamily={FONTS.medium} fontSize={18} alignSelf={"center"} justifyContent={"center"} alignItems={"center"} marginTop={30} borderRadius={8} elevation={5} shadowopacity={1} color={COLORS.black} />

      <View style={styles.view1}>
        <Text style={styles.text1}>Don't have an account? </Text>
        <Buttons onPress={() => navigation.navigate("UserRegister")} title={"Register"} color={COLORS.white} fontFamily={FONTS.semibold} fontSize={15} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    alignSelf: "center",
    color: COLORS.black,
    marginVertical: 40
  },
  view1: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30
  },
  text1: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.black
  },
  ErrorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: "1%"
    // paddingLeft: '8%',
  },
  ErrorText: {
    fontSize: 12,
    color: COLORS.red,
    fontFamily: FONTS.regular,
    width: "75%",
  },
})
export default User;
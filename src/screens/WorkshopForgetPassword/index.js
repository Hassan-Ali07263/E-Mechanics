import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { COLORS, FONTS } from '../../enums/StyleEnums';
import Input from '../../components/Input';
import { IMAGES } from '../../assets/images';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import { isStrongPassword } from '../../utils/Helper';

const WorkshopForgetPassword = () => {
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
  const navigation = useNavigation();

  const handleNext = () => {
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

    if (confirmPassword.trim() === '') {
      setConfirmPasswordErr('Please enter your password');
      return;
    }
    if (!isStrongPassword(Password)) {
      setConfirmPasswordErr(
        'Password must be at least 6 characters long, include one capital letter, one number, and one special character.'
      );
      return;
    }
    setConfirmPasswordErr('');

    if (Password != confirmPassword) {
      setConfirmPasswordErr("Password does not match")
      return;
    }
    setConfirmPasswordErr('');

    navigation.navigate("Login")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Image style={styles.changePasswordimage} source={IMAGES.ChangePassword} />

          <Text style={styles.changePasswordText}>Change Password</Text>
          <Input ph={"Password"} phc={COLORS.black} width={"100%"} height={46} paddingHorizontal={20} color={COLORS.black} background={COLORS.inputyellow} value={Password} onChangeText={(text) => setPassword(text)} borderRadius={10} elevation={5} shadowopacity={1} marginTop={15} secureText={true} />
          {passwordError && (
            <View style={[styles.ErrorSection]}>
              <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
              <Text style={styles.ErrorText}>{passwordError}</Text>
            </View>
          )}
          <Input ph={"confirm password"} phc={COLORS.black} width={"100%"} height={46} paddingHorizontal={20} color={COLORS.black} background={COLORS.inputyellow} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} borderRadius={10} elevation={5} shadowopacity={1} marginTop={15} secureText={true} />
          {confirmPasswordErr && (
            <View style={[styles.ErrorSection]}>
              <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
              <Text style={styles.ErrorText}>{confirmPasswordErr}</Text>
            </View>
          )}

          <Buttons onPress={handleNext} backgroundColor={COLORS.white} title={"Update Password"} height={44} width={"60%"} fontFamily={FONTS.medium} fontSize={18} alignSelf={"center"} justifyContent={"center"} alignItems={"center"} marginTop={"15%"} borderRadius={8} elevation={5} shadowopacity={1} color={COLORS.black} />

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.yellow
  },
  innerContainer: {
    marginHorizontal: "5%"
  },
  changePasswordimage: {
    height: 110,
    width: 110,
    marginTop: "35%",
    alignSelf: "center"
  },
  changePasswordText: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLORS.black_1,
    marginVertical: "5%",
    alignSelf: "center"
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
export default WorkshopForgetPassword;
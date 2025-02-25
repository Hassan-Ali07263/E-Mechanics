import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar, ImageBackground, Text } from 'react-native';
import { IMAGES } from '../../assets/images';
import { COLORS, FONTS } from '../../enums/StyleEnums';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login")
    }, 3000)
  }, [])

  return (
    <View style={styles.view}>
      <StatusBar barStyle={"light-content"} backgroundColor={COLORS.black} />
      <ImageBackground style={styles.imgback} source={IMAGES.SPLASHING}>
        <View>
          <Text style={styles.text}>Welcome,</Text>
          <Text style={styles.text1}>Find Help, Fix Fast with E-mechanic!</Text>
          <Text style={styles.text3}>let's get started</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  imgback: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    paddingBottom: 50
  },
  text: {
    fontFamily: FONTS.semibold,
    fontSize: 26,
    color: COLORS.white
  },
  text1: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 22,
  },
  text3: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.yellow
  }
})
export default Splash;
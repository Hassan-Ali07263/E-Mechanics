import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../enums/StyleEnums';
import User from '../../components/User';
import WorkShop from '../../components/WorkShop';

const Login = () => {
  const [user, setUser] = useState(1);
  
  return (
    <View style={styles.view}>
      <StatusBar barStyle={"light-content"} backgroundColor={COLORS.yellow} />

      <Text style={styles.text1}>Login</Text>

      <View style={styles.view1}>
        <TouchableOpacity onPress={() => setUser(1)}
          style={user === 1 ? styles.button1 : styles.button}>
          <Text style={styles.text}>User</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setUser(2)}
          style={user === 2 ? styles.button1 : styles.button}>
          <Text style={styles.text}>WorkShop</Text>
        </TouchableOpacity>
      </View>

      {
        user === 1 ? <User /> : <WorkShop />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLORS.yellow,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  view1: {
    height: 50,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 15,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 48,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  button1: {
    height: 48,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: COLORS.yellow
  },
  text: {
    color: COLORS.black,
    fontFamily: FONTS.medium,
    fontSize: 16
  },
  text1: {
    color: COLORS.black,
    fontFamily: FONTS.semibold,
    fontSize: 24,
    marginBottom: 20,
    alignSelf: "center"
  }
})
export default Login;
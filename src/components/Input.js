import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ ph, phc,alignSelf,marginBottom, width, height, bordercolor, background, paddingHorizontal, color, onChangeText, value, borderRadius, shadowopacity, elevation, marginTop, secureText, borderwidth, keyboardType }) => {
  return (
    <TextInput style={{
      width: width,
      height: height,
      backgroundColor: background,
      color: color,
      paddingHorizontal: paddingHorizontal,
      borderRadius: borderRadius,
      elevation: elevation,
      shadowOpacity: shadowopacity,
      marginTop: marginTop,
      borderWidth: borderwidth,
      borderColor: bordercolor,
      alignSelf:alignSelf,
      marginBottom:marginBottom
    }}
      placeholder={ph}
      placeholderTextColor={phc}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureText}
      keyboardType={keyboardType}
    />
  );
}
export default Input;
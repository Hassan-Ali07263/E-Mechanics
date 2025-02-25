import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Buttons = ({ title, color, fontFamily, fontSize, alignSelf, marginTop, backgroundColor, height, width, justifyContent, alignItems, borderRadius, elevation, shadowopacity, onPress, marginBottom, borderColor, borderWidth }) => {
  return (
    <TouchableOpacity onPress={onPress}
      style={{
        alignSelf: alignSelf,
        marginTop: marginTop,
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        justifyContent: justifyContent,
        alignItems: alignItems,
        borderRadius: borderRadius,
        elevation: elevation,
        shadowOpacity: shadowopacity,
        marginBottom: marginBottom,
        borderColor: borderColor,
        borderWidth: borderWidth
      }}
    >
      <Text
        style={{
          color: color,
          fontFamily: fontFamily,
          fontSize: fontSize
        }}
      >{title}</Text>
    </TouchableOpacity>
  );
}
export default Buttons;
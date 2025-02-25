import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/StyleEnums";

export const styles=StyleSheet.create({
    container:{
        flex:1
    },
    view1: {
        paddingHorizontal: "5%",
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.yellow,
        alignItems: "center"
      },
      button: {
        padding: 5
      },
      text: {
        fontFamily: FONTS.semibold,
        fontSize: 18,
        color: COLORS.black
      },
      img: {
        height: 50,
        width: 50
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      calloutContainer: {
        padding: 5,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 5,
      },
      title: {
        fontFamily:FONTS.medium,
        fontSize: 16,
        marginBottom: "1%",
        color:COLORS.black
      },
      description: {
        fontFamily:FONTS.regular,
        fontSize: 14,
        marginBottom: "1%",
        color:COLORS.black_1
      },
      phoneNumber: {
        fontSize: 14,
        color: "blue",
        textDecorationLine: "underline",
      },
})
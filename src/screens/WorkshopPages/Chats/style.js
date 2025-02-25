import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../enums/StyleEnums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    chatText: {
        fontFamily: FONTS.semibold,
        fontSize: 18,
        color: COLORS.black
    },
    header: {
        backgroundColor: COLORS.yellow,
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        elevation:5
    },
    timeText: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.grey_1
    },
    discriptionText: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.grey_1
    },
    nameText: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black
    },
    innerView: {
        flexDirection: "row",
        justifyContent:"space-between",
        width:"80%"
    },
    profileImage: {
        height: 53.46,
        width: 53.46,
        borderRadius: 53,
        marginRight:"3%"
    },
    chatButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal:"5%",
        paddingVertical:"2%"
    },
    view1: {
        paddingHorizontal: 15,
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
})
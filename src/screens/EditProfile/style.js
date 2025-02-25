import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../enums/StyleEnums";

export const styles=StyleSheet.create({
    view: {
        flex: 1
    },
    view1: {
        flexDirection: "row",
        backgroundColor: COLORS.yellow,
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    text: {
        fontFamily: FONTS.semibold,
        fontSize: 18,
        color: COLORS.black,
        marginLeft: "20%"
    },
    button: {
        padding: 5
    },
    view2: {
        paddingHorizontal: "5%",
    },
    text1: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        color: COLORS.lightblue,
        marginVertical: 10
    },
    containerstyle: {
        borderWidth: 1,
        borderRadius: 5,
        width: "100%",
        borderColor: COLORS.placeholder,
    },
    textinputstyle: {
        fontSize: 14,
        height: 55,
        width: "100%",
        color: "black"
    },
    textcontainer: {
        borderRadius: 5,
        height: 55,
        width: "100%",
        color: "black"
    },
    textinputprops: {
        placeholderTextColor: COLORS.placeholder
    },
    images: {
        height: 150,
        width: 150
    },
    button1: {
        height: 150,
        width: 150
    },
    view3: {
        flex: 1,
        justifyContent: "flex-end"
    },
    view4: {
        backgroundColor: COLORS.yellow,
        height: "15%",
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: "row",
        alignItems: "center"
    },
    button2: {
        marginHorizontal: 20,
        alignItems: "center"
    },
    text2: {
        color: COLORS.black,
        fontFamily: FONTS.medium,
        fontSize: 16
    },
    view5: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        marginBottom:10
    },
})
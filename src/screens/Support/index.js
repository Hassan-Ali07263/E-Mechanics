import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '../../enums/StyleEnums';
import { IMAGES } from '../../assets/images';

const Support = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={styles.button}>
                    <Image style={styles.backImage} source={IMAGES.Back} />
                </TouchableOpacity>
                <Text style={styles.text}>Help & Support</Text>
            </View>

            <View style={styles.view2}>
                <Text style={styles.text1}>Lorem ipsum dolor sit amet consectetur. Eu non tellus habitant et vitae. Suscipit fermentum orci aliquam lectus nec. Eget sed diam ultrices non consectetur augue feugiat. Neque lobortis ornare vitae nec rutrum vel viverra morbi.</Text>
                <Text style={styles.text1}>Lorem ipsum dolor sit amet consectetur. Eu non tellus habitant et vitae. Suscipit fermentum orci aliquam lectus nec.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: "5%",
        paddingVertical: 20
    },
    text: {
        fontFamily: FONTS.bold,
        fontSize: 18,
        color: COLORS.black,
        marginLeft: "5%"
    },
    view1: {
        flexDirection: "row",
        alignItems: "center"
    },
    text1: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.grey,
        marginBottom: 20
    },
    view2: {
        marginVertical:"7%"

    },
    backImage:{
        width:24,
        height:15,
    }
})
export default Support;
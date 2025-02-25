import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { COLORS, FONTS } from '../../enums/StyleEnums';
import { BlackArrowBack, Camera, Cancel, Gallery } from '../../assets/svgs';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import PhoneInput from 'react-native-phone-number-input';
import { IMAGES } from '../../assets/images';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Buttons from '../../components/Buttons';
import { isEmailValid, isStrongPassword } from '../../utils/Helper';

const EditProfile = () => {
    const navigation = useNavigation();
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [img, setImg] = useState('');
    const [firstErr, setFirstErr] = useState('');
    const [lastErr, setLastErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const [userNameErr, setUserNameErr] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [imgErr, setImgErr] = useState('');
    const [open, setOpen] = useState(false);

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImg(imageUri);
                setOpen(false);
            }
        });
    };


    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImg(imageUri);
                setOpen(false);
            }
        });
    }

    const handleNext = () => {

        // Validate first name
        if (first.trim() === '') {
            setFirstErr('Please enter your first name');
            return;
        }
        setFirstErr('');

        // Validate last name
        if (last.trim() === '') {
            setLastErr('Please enter your last name');
            return;
        }
        setLastErr('');

        // Validate email
        if (email.trim() === '') {
            setEmailErr('Please enter your email');
            return;
        }
        if (!isEmailValid(email)) {
            setEmailErr('Your email address is not valid');
            return;
        }
        setEmailErr('');

        // Validate phone number
        if (Phone.trim() === '') {
            setPhoneErr('Please enter your phone number');
            return;
        }
        setPhoneErr('');

        // Validate username
        if (username.trim() === '') {
            setUserNameErr('Please enter your username');
            return;
        }
        setUserNameErr('');

        // Validate password
        if (password.trim() === '') {
            setPasswordError('Please enter your password');
            return;
        }
        if (!isStrongPassword(password)) {
            setPasswordError(
                'Password must be at least 6 characters long, include one capital letter, one number, and one special character.'
            );
            return;
        }
        setPasswordError('');

        // Validate confirm password
        if (confirm.trim() === '') {
            setConfirmPasswordError('Please enter your password');
            return;
        }
        if (!isStrongPassword(confirm)) {
            setConfirmPasswordError(
                'Password must be at least 6 characters long, include one capital letter, one number, and one special character.'
            );
            return;
        }
        setConfirmPasswordError('');

        // Validate image enterance
        if (img.trim() === '') {
            setImgErr('Please upload your profile');
            return;
        }
        setImgErr('');

        // check password and the confirm password does not same 
        if (password != confirm) {
            setPasswordError('password does not match');
            setConfirmPasswordError('password does not match');
            return;
        }
        setPasswordError('');
        setConfirmPasswordError('');

        // Navigate if all inputs are valid
        // navigation.navigate("Login");
    };
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLORS.yellow} barStyle={"light-content"} />
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={styles.button}>
                    <BlackArrowBack />
                </TouchableOpacity>
                <Text style={styles.text}>Update Profile</Text>
            </View>

            <ScrollView style={styles.view2}>
                <Text style={styles.text1}>First Name</Text>
                <Input borderwidth={1} bordercolor={COLORS.placeholder} borderRadius={5} ph={"Enter first name"} phc={COLORS.placeholder} height={55} width={"100%"} paddingHorizontal={10} color={COLORS.black} value={first} onChangeText={(text) => setFirst(text)} />
                {firstErr && (
                    <View style={[styles.ErrorSection]}>
                        <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
                        <Text style={styles.ErrorText}>{firstErr}</Text>
                    </View>
                )}

                <Text style={styles.text1}>Last Name</Text>
                <Input borderwidth={1} bordercolor={COLORS.placeholder} borderRadius={5} ph={"Enter last name"} phc={COLORS.placeholder} height={55} width={"100%"} paddingHorizontal={10} color={COLORS.black} value={last} onChangeText={(text) => setLast(text)} />
                {lastErr && (
                    <View style={[styles.ErrorSection]}>
                        <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
                        <Text style={styles.ErrorText}>{lastErr}</Text>
                    </View>
                )}

                <Text style={styles.text1}>Email</Text>
                <Input keyboardType={"email-address"} borderwidth={1} bordercolor={COLORS.placeholder} borderRadius={5} ph={"Enter your email"} phc={COLORS.placeholder} height={55} width={"100%"} paddingHorizontal={10} color={COLORS.black} value={email} onChangeText={(text) => setEmail(text)} />
                {emailErr && (
                    <View style={[styles.ErrorSection]}>
                        <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
                        <Text style={styles.ErrorText}>{emailErr}</Text>
                    </View>
                )}

                <Text style={styles.text1}>Phone Number</Text>
                <PhoneInput
                    defaultValue={Phone}
                    defaultCode='PK'
                    layout="second"
                    onChangeFormattedText={(text) => setPhone(text)}
                    containerStyle={styles.containerstyle}
                    textInputStyle={styles.textinputstyle}
                    textContainerStyle={styles.textcontainer}
                    placeholder='1234567890'
                    textInputProps={styles.textinputprops}
                    keyboardType={"numric"}
                />
                {phoneErr && (
                    <View style={[styles.ErrorSection]}>
                        <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
                        <Text style={styles.ErrorText}>{phoneErr}</Text>
                    </View>
                )}

                <Text style={styles.text1}>Username (For login)</Text>
                <Input borderwidth={1} bordercolor={COLORS.placeholder} borderRadius={5} ph={"Enter username"} phc={COLORS.placeholder} height={55} width={"100%"} paddingHorizontal={10} color={COLORS.black} value={username} onChangeText={(text) => setUsername(text)} />
                {userNameErr && (
                    <View style={[styles.ErrorSection]}>
                        <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
                        <Text style={styles.ErrorText}>{userNameErr}</Text>
                    </View>
                )}

                <Text style={styles.text1}>Password</Text>
                <Input borderwidth={1} bordercolor={COLORS.placeholder} borderRadius={5} ph={"**********"} phc={COLORS.placeholder} height={55} width={"100%"} paddingHorizontal={10} color={COLORS.black} value={password} onChangeText={(text) => setPassword(text)} secureText={true} />
                {passwordError && (
                    <View style={[styles.ErrorSection]}>
                        <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
                        <Text style={styles.ErrorText}>{passwordError}</Text>
                    </View>
                )}

                <Text style={styles.text1}>Confirm Password</Text>
                <Input borderwidth={1} bordercolor={COLORS.placeholder} borderRadius={5} ph={"**********"} phc={COLORS.placeholder} height={55} width={"100%"} paddingHorizontal={10} color={COLORS.black} value={confirm} onChangeText={(text) => setConfirm(text)} secureText={true} />
                {confirmPasswordError && (
                    <View style={[styles.ErrorSection]}>
                        <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
                        <Text style={styles.ErrorText}>{confirmPasswordError}</Text>
                    </View>
                )}

                <Text style={styles.text1}>User Image</Text>
                {
                    !img ?
                        <TouchableOpacity onPress={() => setOpen(true)}
                            style={styles.button1}>
                            <Image style={styles.images} source={IMAGES.PROFILE} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setOpen(true)}
                            style={styles.button1}>
                            <Image style={styles.images} source={{ uri: img }} />
                        </TouchableOpacity>
                }
                {imgErr && (
                    <View style={[styles.ErrorSection]}>
                        <Image source={IMAGES.AlertIcon} style={{ height: 20, width: 20 }} />
                        <Text style={styles.ErrorText}>{imgErr}</Text>
                    </View>
                )}

                <Buttons onPress={handleNext} backgroundColor={COLORS.yellow} title={"update"} height={44} width={"70%"} fontFamily={FONTS.medium} fontSize={18} alignSelf={"center"} justifyContent={"center"} alignItems={"center"} marginTop={30} borderRadius={8} elevation={5} shadowopacity={1} color={COLORS.black} marginBottom={"10%"} />

            </ScrollView>

            <Modal transparent={true} visible={open}>
                <View style={styles.view3}>
                    <View style={styles.view4}>
                        <TouchableOpacity onPress={() => openImagePicker()}
                            style={styles.button2}>
                            <Gallery height={50} width={50} />
                            <Text style={styles.text2}>Gallery</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleCameraLaunch()}
                            style={styles.button2}>
                            <Camera height={50} width={50} />
                            <Text style={styles.text2}>Camera</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setOpen(false)}
                            style={styles.button2}>
                            <Cancel height={50} width={50} />
                            <Text style={styles.text2}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>

    );
}

const styles = StyleSheet.create({
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
        marginLeft: "25%"
    },
    button: {
        padding: 5
    },
    view2: {
        paddingHorizontal: 20,
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
        marginBottom: 10
    },
    ErrorSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        // marginTop: "8%"
        // paddingLeft: '8%',
    },
    ErrorText: {
        fontSize: 12,
        color: COLORS.red,
        fontFamily: FONTS.regular,
        width: "75%",
    },
})
export default EditProfile;
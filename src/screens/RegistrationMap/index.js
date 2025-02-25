import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform, TouchableOpacity, Image, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IMAGES } from '../../assets/images';
import { COLORS, FONTS } from '../../enums/StyleEnums';
import { useNavigation } from '@react-navigation/native';

const RegistrationMap = () => {
    const navigation = useNavigation();
    const [currentLocation, setCurrentLocation] = useState(null);
    console.log(currentLocation)
    const mapRef = useRef(null);
    console.log(mapRef.current)
    // Request location permission
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.error('Permission request error:', err);
            return false;
        }
    };

    useEffect(() => {
        requestLocationPermission();
    }, [])

    // Fetch current location
    // const fetchCurrentLocation = async () => {
    //     const hasPermission = await requestLocationPermission();
    //     if (!hasPermission) {
    //         console.warn('Location permission denied');
    //         return;
    //     }

    //     Geolocation.getCurrentPosition(
    //         (position) => {
    //             const { latitude, longitude } = position.coords;
    //             console.log(position.coords)
    //             const newLocation = {
    //                 latitude,
    //                 longitude,
    //                 latitudeDelta: 0.01,
    //                 longitudeDelta: 0.01,
    //             };
    //             console.log("line 46.....")
    //             console.log(newLocation)
    //             setCurrentLocation(newLocation);

    //             // Move map to new location
    //             if (mapRef.current) {
    //                 mapRef.current.animateToRegion(newLocation, 1000);
    //             }
    //             console.log(currentLocation)
    //         },
    //         (error) => console.error('Location fetch error:', error),
    //         {
    //             enableHighAccuracy: true,
    //             timeout: 15000,
    //             maximumAge: 10000,
    //         }
    //     );
    // };

    // useEffect(() => {
    //     fetchCurrentLocation();
    // }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImage} resizeMode='contain' source={IMAGES.Back} />
                </TouchableOpacity>
                <Text style={styles.mapText}>Maps</Text>
                <Text style={styles.mapText}></Text>
            </View>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={currentLocation}
                showsUserLocation={true}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    // locationButton: {
    //     position: 'absolute',
    //     bottom: 20,
    //     right: 20,
    //     backgroundColor: '#007AFF',
    //     padding: 12,
    //     borderRadius: 30,
    //     elevation: 5, // Android shadow
    // },
    mapText: {
        fontFamily: FONTS.semibold,
        color: COLORS.black,
        fontSize: 14
    },
    backImage: {
        height: 20,
        width: 30
    },
    topView: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        alignItems: "center",
        backgroundColor: COLORS.yellow
    }
});

export default RegistrationMap;

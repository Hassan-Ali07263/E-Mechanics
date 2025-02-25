import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { IMAGES } from '../../assets/images';
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from './style';
import { COLORS } from '../../enums/StyleEnums';
import MapView, { Callout, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { markers } from '../../constents';
import { useNavigation } from '@react-navigation/native';
import { PermissionsAndroid } from 'react-native';

const Maps = () => {
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapRef, setMapRef] = useState(null);

  // Request Location Permission
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

  // Function to Get Current Location
  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Please allow location access to use this feature.');
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        // Move map to user's location
        if (mapRef) {
          mapRef.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
        console.log(mapRef)
      },
      (error) => console.error('Location fetch error:', error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // useEffect(() => {
  //   getCurrentLocation(); // Get location when the screen loads
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="menu-outline" color={COLORS.black} size={30} />
        </TouchableOpacity>
        <Text style={styles.text}>Maps</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image style={styles.img} source={IMAGES.PROFILES} />
        </TouchableOpacity>
      </View>

      <MapView
        ref={(ref) => setMapRef(ref)}
        style={styles.map}
        initialRegion={{
          latitude: 28.4287, // Default latitude
          longitude: 70.3247, // Default longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true} // Show blue dot for user location
      >
        {/* Example Markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
            onCalloutPress={() => navigation.navigate("Chats", { newChat: {
              name: marker.title,
              discription: marker.description,
              time: "3:45 pm",
              image: IMAGES.AutoLogo3, // Optional
            } })}
          >
            <Callout tooltip>
              <View style={styles.calloutContainer}>
                <Text style={styles.title}>{marker.title}</Text>
                <Text style={styles.description}>{marker.description}</Text>
                <Text style={styles.phoneNumber}>{marker.phoneNumber}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Button to Get Current Location */}
      <TouchableOpacity style={styles.locationButton} onPress={getCurrentLocation}>
        <Ionicons name="locate" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Maps;

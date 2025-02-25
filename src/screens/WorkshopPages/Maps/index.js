import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { IMAGES } from '../../../assets/images';
import { COLORS } from '../../../enums/StyleEnums';

const Maps = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 28.4287, // Default latitude
    longitude: 70.3247, // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Function to get current location
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion((prevRegion) => ({
          ...prevRegion,
          latitude,
          longitude,
        }));
      },
      (error) => {
        Alert.alert("Error", "Failed to get current location");
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.view1}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="menu-outline" color={COLORS.black} size={30} />
        </TouchableOpacity>
        <Text style={styles.text}>Maps</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image style={styles.img} source={IMAGES.PROFILES} />
        </TouchableOpacity>
      </View>

      {/* Map */}
      <MapView style={styles.map} region={region}>
        {/* Current Location Marker */}
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} title="You are here" />
      </MapView>

      {/* Get Current Location Button */}
      <TouchableOpacity style={styles.locationButton} onPress={getCurrentLocation}>
        <Ionicons name="locate-outline" color={COLORS.white} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Maps;

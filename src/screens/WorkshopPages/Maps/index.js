import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import { styles } from './style';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../../../assets/images';
import { COLORS } from '../../../enums/StyleEnums';
import { markers } from '../../../constents';

const Maps = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="menu-outline" color={COLORS.black} size={30} />
        </TouchableOpacity>
        <Text style={styles.text}>Maps</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
          <Image style={styles.img} source={IMAGES.PROFILES} />
        </TouchableOpacity>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.4287, // Default latitude
          longitude: 70.3247, // Default longitude
          latitudeDelta: 0.0922, // Zoom level for latitude
          longitudeDelta: 0.0421, // Zoom level for longitude
        }}
      >
        {/* Example Markers */}
        {/* {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
            onCalloutPress={() => {
              // Alert.alert("Navigating", `Navigating to chat with ${marker.phoneNumber}`);
              navigation.navigate("Chats", { newChat: {
                name: marker.title,
                discription: marker.description,
                time: "3:45 pm",
                image: IMAGES.AutoLogo3, // Optional
              }, });
            }}
          >
            <Callout tooltip>
                <View style={styles.calloutContainer}>
                  <Text style={styles.title}>{marker.title}</Text>
                  <Text style={styles.description}>{marker.description}</Text>
                  <Text style={styles.phoneNumber}>{marker.phoneNumber}</Text>
                </View>
            </Callout>
          </Marker> */}
        {/* ))} */}
      </MapView>

    </View>
  );
}
export default Maps;
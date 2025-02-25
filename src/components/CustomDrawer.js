import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../assets/images';

const CustomDrawer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={IMAGES.PROFILES} style={styles.profileImage} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <TouchableOpacity
        style={styles.drawerItem}
        // onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.drawerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        // onPress={() => navigation.navigate('Chats')}
      >
        <Text style={styles.drawerText}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        // onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.drawerText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerItem: {
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  drawerText: {
    fontSize: 16,
  },
});

export default CustomDrawer;

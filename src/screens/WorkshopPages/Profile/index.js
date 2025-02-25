import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../../../assets/images';
import { workerProfileDetail } from '../../../constents';

const Profile = () => {
  const navigation = useNavigation();

  const ProfileFunctions = (item) => {
    console.log(item)
    if (item.id === 1) {
      navigation.navigate("UpdateWorkerProfile")
    } else if (item.id === 2) {
      console.log("saved beneficiary function run")
    }
    else if (item.id === 3) {
      console.log("Two factor authentication function run")
    }
    else {
      console.log("Logout")
    }
  }
  const ProfileData = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => ProfileFunctions(item)}
        style={styles.buttonsView}>
        <View style={styles.innerButtonView}>
          <View style={styles.imageListView}>
            <Image style={styles.sideImage} resizeMode='contain' source={item.image} />
          </View>

          <View>
            <Text style={styles.listNameText}>{item.name}</Text>
            <Text style={styles.discriptionText}>{item.discription}</Text>
          </View>
        </View>

        <Image style={styles.goImage} resizeMode='contain' source={IMAGES.Go} />
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <Image style={styles.imageStyle} resizeMode='contain' source={IMAGES.PROFILES} />
          <View>
            <Text style={styles.nameText}>Worker</Text>
            <Text style={styles.mailText}>worker123@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("UpdateWorkerProfile")}>
          <Image style={styles.editImage} resizeMode='contain' source={IMAGES.Edit} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={workerProfileDetail}
          renderItem={ProfileData}
          contentContainerStyle={{ marginVertical: "3%" }}
        />
      </View>

      <View style={{ marginTop: "10%" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Support")}
          style={styles.buttonsView}>
          <View style={styles.innerButtonView}>
            <View style={styles.imageListView}>
              <Image style={styles.sideImage} resizeMode='contain' source={IMAGES.Help} />
            </View>
            <Text style={styles.listNameText}>Help & Support</Text>
          </View>
          <Image style={styles.goImage} resizeMode='contain' source={IMAGES.Go} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}
          style={styles.buttonsView}>
          <View style={styles.innerButtonView}>
            <View style={styles.imageListView}>
              <Image style={styles.sideImage} resizeMode='contain' source={IMAGES.Notification} />
            </View>
            <Text style={styles.listNameText}>Notification</Text>
          </View>
          <Image style={styles.goImage} resizeMode='contain' source={IMAGES.Go} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Profile;
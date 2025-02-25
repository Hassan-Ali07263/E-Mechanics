import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, FONTS } from '../../enums/StyleEnums';
import Ionicons from "react-native-vector-icons/Ionicons"
import { IMAGES } from '../../assets/images';
import Octicons from "react-native-vector-icons/Octicons"
import { useNavigation } from '@react-navigation/native';
const Home = () => {

  const navigation =useNavigation();
  const data = [
    { description: "Easy to use." },
    { description: "Free for everyone." },
    { description: "Fast and online vehicle repair services." },
    { description: "Use anywhere and anytime." },
    { description: "Friendly behaviour workers." },
  ];

  const workshop = [
    {
      id: 1,
      name: "Auto King Workshop",
      image: IMAGES.IMAGE1
    },
    {
      id: 2,
      name: "Auto King Workshop",
      image: IMAGES.IMAGE2
    },
    {
      id: 3,
      name: "Auto King Workshop",
      image: IMAGES.IMAGE1
    },
  ]

  const NewsData = [
    { id: 1, image: IMAGES.NewsOne, name: "MG GT 2021", discription: "All New 2022 MG GT - Born A Rebel" },
    { id: 2, image: IMAGES.IMAGE1, name: "VOLVO", discription: "Order VOLVO Spare Parts" },
    { id: 3, image: IMAGES.NewsOne, name: "MG GT 2021", discription: "All New 2022 MG GT - Born A Rebel" },
  ]
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLORS.yellow} barStyle={"light-content"} />

      <View style={styles.view1}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="menu-outline" color={COLORS.black} size={30} />
        </TouchableOpacity>
        <Text style={styles.text}>E-Mechanic</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
          <Image style={styles.img} source={IMAGES.PROFILES} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Image style={styles.homeimg} source={IMAGES.HOMEMAIN} />

        <View style={styles.view2}>

          <Text style={styles.text3}>Popular Shops</Text>
          {
            <FlatList
              data={workshop}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View style={styles.view6}>
                    <Image source={item.image} style={styles.img1} />
                    <View style={styles.view5}>
                      <Text style={styles.text4}>{item.name}</Text>
                    </View>
                  </View>
                )
              }}
            />
          }
        </View>

        <Text style={styles.text3}>News</Text>
        {
          <FlatList
            data={NewsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.view8}>
                  <Image source={item.image} style={styles.img1} />
                  <View style={styles.view7}>
                    <Text style={styles.text5}>{item.name}</Text>
                    <Text style={styles.text6}>{item.discription}</Text>
                  </View>
                </View>
              )
            }}
          />
        }

<Text style={styles.text1}>Features</Text>

<View style={styles.view3}>
  {
    data.map((item) => {
      return (
        <View style={styles.view4}>
          <Octicons name="dot" color={COLORS.yellow} size={10} />
          <Text style={styles.text2}>{item.description}</Text>
        </View>
      )
    })
  }
</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLORS.white
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
  homeimg: {
    height: 300,
    width: "100%"
  },
  view3: {
    marginLeft: 20
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLORS.lightblue,
    marginLeft: 20,
    marginTop: "3%"
  },

  text2: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize: 12,
    marginLeft: 15
  },
  view4: {
    flexDirection: "row",
    alignItems: "center"
  },
  text3: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLORS.lightblue,
    marginBottom: "2.5%",
    marginLeft: "5%"
  },
  text4: {
    fontFamily: FONTS.semibold,
    fontSize: 12,
    color: COLORS.white
  },
  img1: {
    height: 125,
    width: 165
  },
  view5: {
    backgroundColor: COLORS.yellow,
    alignItems: "center",
    justifyContent: "center",
    height: 30
  },
  view6: {
    marginLeft: 20
  },
  view8:{
    marginLeft: 20
  },
  view7:{
    justifyContent: "center",
    height: 70,
    backgroundColor:COLORS.yellow,
    width:165,
    paddingHorizontal:"5%",
    marginBottom:"5%"
  },
  text5: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLORS.black,
    alignSelf:"flex-start",
  },
  text6:{
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.black,
    alignSelf:"flex-start",
  }

})
export default Home;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ui from "../screens/WorkshopPages/index"
import { COLORS, FONTS } from '../enums/StyleEnums';
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

const BottomTabsWorkshop = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.black,
            tabBarInactiveTintColor: "grey",
            // tabBarActiveBackgroundColor:COLORS.yellow
            tabBarStyle: {
                backgroundColor: COLORS.yellow,
                height: 60,
                paddingBottom: 5
            }
        }}>

            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Octicons name="home" color={color} size={size} />
                ),
                tabBarLabelStyle: { fontFamily: FONTS.semibold }
            }} name="Home" component={ui.Home} />


            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="map-pin" color={color} size={size} />
                ),
                tabBarLabelStyle: { fontFamily: FONTS.semibold },
                tabBarLabel:"Maps"
            }} name="Maps" component={ui.Maps} />


            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
                ),
                tabBarLabelStyle: { fontFamily: FONTS.semibold }
            }} name="Chats" component={ui.Chats} />


            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="user" color={color} size={size} />
                ),
                tabBarLabelStyle: { fontFamily: FONTS.semibold }
            }} name="Profile" component={ui.Profile} />


        </Tab.Navigator>
    );
}
export default BottomTabsWorkshop;
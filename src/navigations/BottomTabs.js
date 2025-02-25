import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../enums/AppEnums';
import * as ui from "../screens/index";
import { COLORS, FONTS } from '../enums/StyleEnums';
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

const BottomTabs = () => {
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
            }} name={SCREENS.HOME} component={ui.Home} />


            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="map-pin" color={color} size={size} />
                ),
                tabBarLabelStyle: { fontFamily: FONTS.semibold },
                tabBarLabel:"Maps"
            }} name={SCREENS.MAPS} component={ui.Maps} />


            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
                ),
                tabBarLabelStyle: { fontFamily: FONTS.semibold }
            }} name={SCREENS.CHATS} component={ui.Chats} />


            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="user" color={color} size={size} />
                ),
                tabBarLabelStyle: { fontFamily: FONTS.semibold }
            }} name={SCREENS.PROFILE} component={ui.Profile} />


        </Tab.Navigator>
    );
}
export default BottomTabs;
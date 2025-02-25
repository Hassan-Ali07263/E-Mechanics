import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ui from "../screens/index";
import { SCREENS } from '../enums/AppEnums';
import BottomTabs from './BottomTabs';
import DrawerNavigate from './DrawerNavigate';
import BottomTabsWorkshop from './BottomTabsWorkshop';

const StackNavigations = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.SPLASH}>
        <Stack.Screen name={SCREENS.SPLASH} component={ui.Splash} />
        <Stack.Screen name={SCREENS.LOGIN} component={ui.Login} />
        <Stack.Screen name={SCREENS.USERREGISTER} component={ui.UserRegister} />
        <Stack.Screen name={SCREENS.WORKSHOPREGISTER} component={ui.WorkshopRegister} />
        <Stack.Screen name={SCREENS.MAPS} component={ui.Maps} />
        <Stack.Screen name='BottomTabs' component={BottomTabs} />
        <Stack.Screen name={SCREENS.SUPPORT} component={ui.Support} />
        <Stack.Screen name={SCREENS.NOTIFICATIONS} component={ui.Notifications} />
        <Stack.Screen name={SCREENS.CHATSCREEN} component={ui.ChatScreen} />
        <Stack.Screen name={SCREENS.EDITPROFILE} component={ui.EditProfile} />
        <Stack.Screen name={SCREENS.WORKSHOPFORGETPASSWORD} component={ui.WorkshopForgetPassword} />
        <Stack.Screen name={SCREENS.USERFORGETPASSWORD} component={ui.UserForgetPassword} />
        <Stack.Screen name='DrawerNavigate' component={DrawerNavigate} />
        <Stack.Screen name='BottomTabsWorkshop' component={BottomTabsWorkshop} />
        <Stack.Screen name='RegistrationMap' component={ui.RegistrationMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigations;
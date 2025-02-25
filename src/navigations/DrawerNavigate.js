import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Chats, Notifications } from '../screens';
import CustomDrawer from '../components/CustomDrawer';
const DrawerNavigate=()=> {
    const Drawer=createDrawerNavigator();
  return (
    <Drawer.Navigator
    drawerContent={(props)=><CustomDrawer {...props} />}
    >
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Chats" component={Chats} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigate;
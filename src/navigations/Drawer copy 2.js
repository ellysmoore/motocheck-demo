import React from "react";
import { StyleSheet, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Home from '../screens/Home';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/color";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};



function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Overview"
      screenOptions={{
        swipeEdgeWidth: 0,
        drawerType: "slide",
        drawerStyle: {
          backgroundColor: Colors.white,
          paddingTop: 50,
          color: Colors.white,
        },
        overlayColor: null,
        headerShown: false,
        sceneContainerStyle: {
          // backgroundColor: COLORS.bodyTextLight,
        },
        drawerActiveTintColor: Colors.primary,
        drawerInactiveTintColor: Colors.gray,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Overview"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="pie-chart" color={Colors.primary} size={27} />
          ),
        }}
      />

      <Drawer.Screen
        name="Inspection"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="barcode-outline" color={Colors.primary} size={27} />
          ),
        }}
      />

      <Drawer.Screen
        name="Notifications"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="notifications-outline" color={Colors.primary} size={27} />
          ),
        }}
      />

      <Drawer.Screen
        name="Maintenance"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="server-outline" color={Colors.primary} size={27} />
          ),
        }}
      />

      <Drawer.Screen
        name="Payment Wallet"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="stats-chart-outline" color={Colors.primary} size={27} />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="file-tray-full-outline" color={Colors.primary} size={27} />
          ),
        }}
      />

      <Drawer.Screen
        name="Log out"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="card" color={Colors.primary} size={27} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}

export default MyDrawer;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    height: 50,
    width: "100%",
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  buttonText: {
    color: Colors.primary,
    paddingLeft: 10,
  },
  imageHeader: { height: 150, width: 150, marginLeft: 40 },
});
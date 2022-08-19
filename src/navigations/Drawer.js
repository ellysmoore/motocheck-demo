import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Home from '../screens/Home';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/color";
import { Fonts } from "../constants/font";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1, marginLeft: 30, marginRight: 20}}>
      <DrawerContentScrollView contentContainerStyle={{backgroundColor: Colors.white}}>
        <View style={{borderBottomWidth: 0.5, borderBottomColor: '#CCCCCC'}}>
        <Image source={require('../../assets/motocheck.png')} style={{height: 30, width: 170, justifyContent: 'center', alignSelf: 'center', marginTop: 40, marginBottom: 44}} />

        </View>
     <View style={{flex: 1}}>
     <DrawerItemList {...props} />
     </View>
    </DrawerContentScrollView>
    <View style={{paddingBottom: 40, paddingLeft: 41}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../../assets/user.png')} style={{height: 60, width: 60}} />
        <View style={{paddingLeft: 16}}>
          <Text style={{color: Colors.black, fontSize: Fonts.p2}}>Faith Auto’s</Text>
          <Text  style={{color: Colors.primary, fontSize: Fonts.p3}}>Auto Centre</Text>
        </View>
      </View>
    </View>
    </View>
    
  );
};



function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Overview"
      screenOptions={{
        headerShown: false,
        // drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: Colors.gray,
        drawerBackgroundColor: Colors.white,
        drawerActiveBackgroundColor: Colors.white,
        drawerType: "slide",
        swipeEdgeWidth: 0,
        overlayColor: null,
        drawerLabelStyle: {
          fontSize: Fonts.p2,
          marginLeft: -10
          // color: Colors.black,
        }
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Overview"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="pie-chart" color={Colors.primary} size={25} />
          ),
        }}
      />

      <Drawer.Screen
        name="Inspection"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="barcode-outline" color={Colors.primary} size={25} />
          ),
        }}
      />

      <Drawer.Screen
        name="Notifications"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="notifications-outline" color={Colors.primary} size={25} />
          ),
        }}
      />

      <Drawer.Screen
        name="Maintenance"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="server-outline" color={Colors.primary} size={25} />
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
            <Ionicons name="file-tray-full-outline" color={Colors.primary} size={25} />
          ),
        }}
      />

      <Drawer.Screen
        name="Log out"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="log-out-outline" color={Colors.primary} size={25} />
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
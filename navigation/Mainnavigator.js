import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetails from "../screens/ProductDetails";
import FavouritesScreen from "../screens/FavouritesScreen";
import BioScreen from "../screens/BioScreen";
import PersonalScreen from "../screens/PersonalScreen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingScreen from "../screens/SettingScreen";

const HomeStack = createStackNavigator();
const FavouriteStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const Mainnavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabBarNavigator} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
};
const ProfileStackNaviator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={TopTabNavigator} />
    </ProfileStack.Navigator>
  );
};
const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Bio" component={BioScreen} />
      <TopTab.Screen name="Personal" component={PersonalScreen} />
      <TopTab.Screen name="Contact" component={BioScreen} />
    </TopTab.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Products" component={ProductsScreen} />
      <HomeStack.Screen name="Product" component={ProductDetails} />
    </HomeStack.Navigator>
  );
};
const FavouriteStackNavigator = () => {
  return (
    <FavouriteStack.Navigator>
      <FavouriteStack.Screen name="Favourites" component={FavouritesScreen} />
    </FavouriteStack.Navigator>
  );
};
const TabBarNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <Ionicons
                  name="md-home-sharp"
                  size={30}
                  color={Colors.primary}
                />
              );
            }
            return <Ionicons name="md-home-sharp" size={24} color="#E6E6E6" />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <Ionicons name="search" size={30} color={Colors.primary} />
              );
            }
            return <Ionicons name="search" size={24} color="#E6E6E6" />;
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteStackNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="heart" size={34} color={Colors.primary} />;
            }
            return <Ionicons name="heart" size={24} color="#E6E6E6" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNaviator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <Ionicons
                  name="ios-person-circle"
                  size={34}
                  color={Colors.primary}
                />
              );
            }
            return (
              <Ionicons name="ios-person-circle" size={24} color="#E6E6E6" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Mainnavigator;

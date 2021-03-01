import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetails from "../screens/ProductDetails";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";
import ProfileScreen from "../screens/ProfileScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const HomeStack = createStackNavigator();
const FavouriteStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Mainnavigator = () => {
  return (
    <NavigationContainer>
      <TabBarNavigator />
    </NavigationContainer>
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
        component={ProfileScreen}
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

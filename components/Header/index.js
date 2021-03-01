import React from "react";
import { Text, View, Image } from "react-native";
import { Colors } from "../../constants";
import SearchBar from "../SearchBar";

const Header = () => (
  <View style={{ padding: 20 }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 21,
            color: "#2E3335",
          }}
        >
          Hello there, <Text style={{ color: Colors.primary }}>Ana!</Text>
        </Text>
      </View>
      <Image
        style={{ width: 50, height: 50, borderRadius: 15 }}
        source={{
          uri:
            "https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg",
        }}
      />
    </View>
    <SearchBar />
  </View>
);

export default Header;

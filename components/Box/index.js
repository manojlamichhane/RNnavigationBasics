import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../constants";

const Box = (props) => {
  return (
    <View
      style={{
        height: 130,
        width: 130,
        backgroundColor: Colors.primary,
        borderRadius: 20,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
      <Text style={{ color: "white" }}>{props.title}</Text>
      <Text style={{ color: "white" }}>{props.subtitle}</Text>
    </View>
  );
};

export default Box;

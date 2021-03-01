import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Colors } from "../constants";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Box from "../components/Box";
import { Products } from "../Data";
import { useNavigation } from "@react-navigation/native";

const recentOrders = Products.filter((item) => item.rating >= 4);

const ProfileScreen = () => {
  console.log(recentOrders);
  const getOrders = ({ item }) => {
    return (
      <View>
        <TouchableHighlight
          onPress={() => Nav.navigate("Product", { productId: item.id })}
        >
          <View
            style={{
              height: 120,
              width: 120,
              paddingHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 80, height: 80, borderRadius: 40 }}
              source={{ uri: item.image }}
            />
            <View style={{ alignItems: "center", width: 120, height: 40 }}>
              <Text>{item.title}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
  const Nav = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ minHeight: 150 }}></View>

        <View style={styles.profileDetail}>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              position: "absolute",
              bottom: 460,
              left: 140,
            }}
            source={{
              uri:
                "https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg",
            }}
          />
          <View style={{ alignItems: "flex-end", padding: 10 }}>
            <SimpleLineIcons
              name="options-vertical"
              size={24}
              color="#66647F"
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text
              style={{ color: "#66647F", fontSize: 20, fontWeight: "bold" }}
            >
              Ana
            </Text>
            <Text style={{ color: "#66647F", fontSize: 10 }}>
              New York, USA
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 35,
              justifyContent: "space-between",
            }}
          >
            <Box title="123" subtitle="Points Earned">
              <FontAwesome5 name="coins" size={24} color="white" />
            </Box>
            <Box title="246" subtitle="Total Orders">
              <FontAwesome5 name="piggy-bank" size={24} color="white" />
            </Box>
          </View>
          <View>
            <Text
              style={{
                color: "#66647F",
                fontSize: 20,
                fontWeight: "bold",
                padding: 35,
              }}
            >
              Recent Orders
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={recentOrders}
              renderItem={getOrders}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    height: Dimensions.get("screen").height,
    marginBottom: 30,
    backgroundColor: Colors.primary,
  },
  profileDetail: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
export default ProfileScreen;

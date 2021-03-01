import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { PopularProducts } from "../../Data";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../constants";
import StarRating from "react-native-star-rating";

const Popular = () => {
  const getPopular = ({ item }) => {
    return (
      <View>
        <View
          style={{ paddingRight: 20, marginTop: 20, width: 280, height: 280 }}
        >
          <ImageBackground
            style={styles.popularImage}
            source={{ uri: item.image }}
          >
            <View style={{ position: "absolute", top: 10, right: 10 }}>
              <AntDesign name="heart" size={24} color="white" />
            </View>
          </ImageBackground>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.title}</Text>
          <Text>{item.desc}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <StarRating
              starSize={12}
              fullStarColor="#FEC94D"
              halfStarColor="#FEC94D"
              rating={item.rating}
            />
            <Text style={{ paddingLeft: 10, color: Colors.primary }}>
              {item.price}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Popular</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={PopularProducts}
        renderItem={(item) => getPopular(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  popularImage: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
});
export default Popular;

import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Colors } from "../constants";
import { Products, Meals } from "../Data";
import StarRating from "react-native-star-rating";

const ProductDetails = (props) => {
  const product = Products.filter(
    (item) => item.id == props.route.params.productId
  );
  const getMeal = (value) => {
    const meal = Meals.find((meal) => meal.id == value);
    return (
      <View
        style={{
          backgroundColor: Colors.primary,
          paddingHorizontal: 10,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
        }}
      >
        <Text>{meal.type}</Text>
      </View>
    );
  };
  const getProduct = ({ item }) => {
    return (
      <View style={styles.screen}>
        <Image
          style={{ width: "100%", height: 240 }}
          source={{ uri: item.image }}
        />
        <View style={styles.productDetail}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.title}</Text>
          <Text style={{ color: Colors.primary, fontSize: 20, marginTop: 10 }}>
            {item.price}
          </Text>
          <View style={{ width: 50 }}>
            <StarRating
              starSize={12}
              fullStarColor="#FEC94D"
              halfStarColor="#FEC94D"
              rating={item.rating}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Details</Text>
          <Text>{item.desc}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {item.meal.map((pro) => getMeal(pro))}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={product}
        renderItem={getProduct}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "green",
  },
  productDetail: {
    height: 350,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 40,
    padding: 10,
  },
});
export default ProductDetails;

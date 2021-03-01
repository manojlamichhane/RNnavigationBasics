import React from "react";
import { Image, Text, View, StyleSheet, Button, FlatList } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Products } from "../Data";

const ProductsScreen = (props) => {
  const productOfCategory = Products.filter(
    (product) => product.category === props.route.params.productId
  );
  const getProducts = ({ item }) => {
    return (
      <View style={styles.productsCard}>
        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate("Product", {
              productId: item.id,
              catid: item.category,
            });
          }}
        >
          <View>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text>{item.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productOfCategory}
        renderItem={getProducts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontFamily: "Inter_900Black",
  },
  image: {
    width: 220,
    height: 220,
  },
  productsCard: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
export default ProductsScreen;

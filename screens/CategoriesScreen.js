import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Image,
  StatusBar,
} from "react-native";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { Categories } from "../Data";
import Header from "../components/Header";
import Popular from "../components/Popular";
import MealList from "../components/MealList";

const CategoriesScreen = (props) => {
  const getCategory = ({ item }) => {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate("Products", { productId: item.catId });
          }}
          style={styles.categoryicon}
        >
          <Image style={styles.category} source={{ uri: item.image }} />
        </TouchableHighlight>
        <Text>{item.name}</Text>
      </View>
    );
  };
  const separator = () => {
    return <View style={{ width: 25, height: 50 }}></View>;
  };
  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="white" />
      <View style={styles.screen}>
        <Header />
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20 }}>
            Select a category
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Categories}
            renderItem={getCategory}
            keyExtractor={(item) => item.catId}
            ItemSeparatorComponent={separator}
          />
          <Popular />
          <MealList />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
  },
  category: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "grey",
  },
  categoryicon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoriesScreen;

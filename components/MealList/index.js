import React from "react";
import { Text, View, FlatList, Image } from "react-native";
import { Meals } from "../../Data";

const MealList = () => {
  const getMeals = ({ item }) => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            paddingRight: 10,
          }}
        >
          <Image
            style={{ width: 75, height: 75, borderRadius: 15 }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>{item.type}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Search by Meals</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Meals}
        renderItem={(item) => getMeals(item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealList;

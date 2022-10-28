import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";

function FoodList2() {
  const [lists, setList] = useState([
    {
      unique: "1",
      id: "1",
      name: "Cải Bắp",
      image: require("../assets/d1.png"),
    },

    {
      id: "2",
      name: "Cà Rốt",
      image: require("../assets/d2.png"),
    },
    {
      id: "3",
      name: "Dưa Hấu",
      image: require("../assets/d3.png"),
    },
    {
      id: "4",
      name: "Kem",
      image: require("../assets/d4.png"),
    },
    {
      id: "5",
      name: "Bánh Sừng Bò",
      image: require("../assets/d5.png"),
    },
  ]);

  const navigation = useNavigation();
  return (
    <ScrollView>
      <FlatList
        data={lists}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: "15%", marginHorizontal: 15 }}>
              <View
                style={{
                  width: 184,
                  height: 156,
                  borderColor: "#ade2e6",
                  elevation: 0.5,
                  shadowOffset: { width: 0.5, height: 0.5 },
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: 20,
                }}
              >
                <Text style={{ fontWeight: "700" }}>{item.name}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("C1")}>
                  <Image source={item.image} />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </ScrollView>
  );
}

export default FoodList2;

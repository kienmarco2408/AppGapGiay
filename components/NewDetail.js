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
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";

function NewDetail() {
  const navigation = useNavigation();
  const [lists, setList] = useState([
    {
      id: "1",
      icon: require("../assets/i3.png"),
      description: "Tác dụng của Origami đối với con người",
      description2: "",
      author: "Mic",
    },
    {
      id: "2",
      num: "2",
      name: "Vũ Hán, Trung Hoa",
      icon: require("../assets/i1.png"),
      description: "Tác dụng của Origami đối với toán học",
      description2: "",
      author: "Joe",
    },
    {
      id: "3",
      num: "3",
      name: "Nhân Xuyên, Nam Triều Tiên",
      icon: require("../assets/i2.png"),
      description: "Cách gấp Origami Nhật Bản hình phòng thư",
      author: "John",
    },
    {
      id: "4",
      icon: require("../assets/i4.png"),
      description: "Gấp Origami hình trái tim",
    },
    {
      id: "5",
      icon: require("../assets/i5.png"),
      description: "Gấp Origami hình bông hoa",
    },
  ]);

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView>
        <FlatList
          data={lists}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight style={{shadowColor:"white"}} onPress={() => navigation.navigate("Read")}>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: "5%",
                  marginVertical: "3%",
                }}
              >
                <View>
                  <Image source={item.icon} />
                </View>

                <View style={{ left: "5%", marginVertical: "5%" }}>
                  <Text style={{ fontWeight: "700" }}>{item.description}</Text>
                  <Text style={{ fontWeight: "700" }}>{item.description2}</Text>
                  <Text style={{ fontWeight: "400" }}>{item.author}</Text>
                </View>
              </View>
              </TouchableHighlight>
            );
          }}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

export default NewDetail;

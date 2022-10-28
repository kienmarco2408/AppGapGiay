import {
  StyleSheet,
  View,
  Image,
  Button,
  Platform,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";

export default class FoodDetail extends Component {
  constructor() {
    super();

    this.state = {
      imageURL: require("../assets/c1.png"),
    };
  }

  Load_New_Image = () => {
    this.setState([
      {
        imageURL: require("../assets/c2.png"),
      },
    ]);
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity >
          <Image source={require("../assets/c1.png")} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ade2e6",
  },

  imageStyle: {
    width: 300,
    height: 300,
  },
});

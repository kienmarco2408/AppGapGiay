import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from "react-native";

function CaiBap7({navigation}){
    return(
        <View style={styles.MainContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate("C8")} >
          <Image source={require("../assets/c7.png")} />
        </TouchableOpacity>
      </View>
    )
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

  export default CaiBap7;
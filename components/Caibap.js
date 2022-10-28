import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import {category} from '../components/data.js'

console.log(category.doAn.list.pic);
function CaiBap({ navigation }) {
  return (
    <View style={styles.MainContainer}>
      <Image
      style={{height: 200, width: 200}}
      source={category.doAn.list.listAddress}/>
      <View style={{ marginLeft: 40, marginTop: 20 }}>
        <Image
          style={{ width: '15%', height: 40 }}
          source={require('../assets/happy.png')}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('C2')}>
        <Image
          source={category.doAn.list.listAddress}
          style={{ borderRadius: 20, borderColor: '#FFAC30', borderWidth: 5 }}
        />
      </TouchableOpacity>
      <Text>{category.doAn.list.listTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ade2e6',
  },

  imageStyle: {
    width: 300,
    height: 300,
  },
});

export default CaiBap;

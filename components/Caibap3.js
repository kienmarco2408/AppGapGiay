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

function CaiBap3({ navigation }) {
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('C4')}>
        <Image
          source={require('../assets/c3.png')}
          style={{ borderRadius: 20, borderColor: '#FFAC30', borderWidth: 5 }}
        />
      </TouchableOpacity>
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

export default CaiBap3;

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Button, Searchbar, TextInput } from 'react-native-paper';
import NewDetail from '../components/NewDetail';

const News = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View
          style={{
            marginLeft: 40,
            marginTop: 20,
          }}
        >
          <Image
            style={{ width: '15%', height: 40 }}
            source={require('../assets/happy.png')}
          />
        </View>

        <View style={{}}>
          <NewDetail />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ade2e6',
  },
  background: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  footer: {
    flex: 12,
    backgroundColor: '#FFF9EC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default News;

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
import { Button, TextInput } from 'react-native-paper';
import Dovat from '../components/Dovat';
import DoAn from '../components/DoAn';
import DoBay from '../components/DoBay';
import Nuoc from '../components/Nuoc';
import Can from '../components/Can';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={{ marginLeft: 40, marginTop: 20 }}>
          <Image
            style={{ width: '15%', height: 40 }}
            source={require('../assets/happy.png')}
          />
        </View>

        <View
          style={{
            marginTop: '10%',
          }}
        >
          <DoAn />
        </View>

        <View
          style={{
            marginTop: '10%',
          }}
        >
          <Dovat />
        </View>

        <View
          style={{
            marginTop: '10%',
          }}
        >
          <Can />
        </View>
        <View
          style={{
            marginTop: '10%',
          }}
        >
          <DoBay />
        </View>
        <View
          style={{
            marginTop: '10%',
          }}
        >
          <Nuoc />
        </View>
        <View style={{ marginTop: '15%', justifyContent: 'center' }}>
          <Image
            source={require('../assets/hoatiet.png')}
            style={{ alignItems: 'center', width: '110%' }}
          />
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
});

export default Home;
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableHighlight,
  ScrollView,
  Alert,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Dovat from '../components/Dovat';
import DoAn from '../components/DoAn';
import DoBay from '../components/DoBay';
import Nuoc from '../components/Nuoc';
import Can from '../components/Can';
import { category } from '../components/data';
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

        <View>
          <TouchableHighlight
            onPress={() => {
              console.log('hehe');
            }}
            underlayColor={'#FFFFFF'}
          >
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  width: '70%',
                  height: '100%',
                  backgroundColor: '#FFAC30',
                  borderWidth: 1,
                  borderColor: '#FFAC30',
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                }}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}
                  >
                    {category[0].objTitle}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '15%',
                  height: '100%',
                  backgroundColor: 'white',
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
                }}
              >
                <Image
                  source={require('../assets/icon/Piza.png')}
                  style={{ alignSelf: 'center', marginTop: 5 }}
                />
              </View>
            </View>
          </TouchableHighlight>
        </View>
        {/* <View
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
        </View> */}
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Image
          source={require('../assets/hoatiet.png')}
          style={{ alignItems: 'center', width: '110%' }}
        />
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

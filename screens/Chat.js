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

const Chat = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginTop: StatusBar.currentHeight }}
        contentContainerStyle={{ paddingBottom: '15%' }}
      >
        <View style={styles.background}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Image
                style={{ width: '15%', height: 40, left: '-340%' }}
                source={require('../assets/happy.png')}
              />
            </View>

            <View style={{ top: '10%' }}>
              <Image source={require('../assets/not.png')} />
            </View>
          </View>
        </View>

        <View style={{ top: '10%' }}>
          <Image source={require('../assets/hoatiet.png')} />
        </View>
      </ScrollView>
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

export default Chat;

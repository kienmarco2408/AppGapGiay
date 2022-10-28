import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DoAn = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('Detail')}
      underlayColor={'#FFFFFF'}
    >
      <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
        <View
          style={{
            width: 301,
            height: 46,
            backgroundColor: '#FFAC30',
            borderWidth: 1,
            borderColor: '#FFAC30',
            borderRadius: 6,
          }}
        >
          <View
            style={{
              top: '5%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
              Đồ Ăn{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 50,
            height: 46,
            backgroundColor: 'white',
            borderRadius: 6,
          }}
        >
          <Image
            source={require('../assets/icon/Piza.png')}
            style={{ alignSelf: 'center', marginTop: 5 }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default DoAn;
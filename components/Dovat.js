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

const Dovat = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('Detail2')}
      underlayColor={'#FFFFFF'}
    >
      <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
        <View
          style={{
            width: 301,
            height: 46,
            backgroundColor: '#FFAC30',
            borderWidth: 1,
            borderColor: '#F69B39',
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
              Đồ Vật{' '}
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
            source={require('../assets/icon/chongchong.png')}
            style={{ alignSelf: 'center', marginTop: 1 }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Dovat;

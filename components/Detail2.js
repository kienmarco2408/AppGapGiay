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
import FoodList2 from './FoodList2';

const Detail2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginTop: StatusBar.currentHeight }}
        contentContainerStyle={{ paddingBottom: '10%' }}
      >
        <View style={styles.background}>
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

          <View>
            <FoodList2 />
          </View>
        </View>

        <View style={{ marginTop: '10%' }}>
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
    flex: 10,
    backgroundColor: '#FFF9EC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Detail2;

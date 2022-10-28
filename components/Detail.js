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
import FoodList from './FoodList';

const Detail = () => {
  const navigation = useNavigation();
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

        <View style={{ alignItems: 'center' }}>
          <FoodList />
        </View>
      </View>

      <View style={{ top: '10%' }}>
        <Image
          source={require('../assets/hoatiet.png')}
          style={{ width: '110%' }}
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

  footer: {
    flex: 10,
    backgroundColor: '#FFF9EC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Detail;

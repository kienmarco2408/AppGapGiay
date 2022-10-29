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
  const [numListPic, setNumListPic] = useState(0)
  const [numList, setNumList] = useState(0)
  const [numObj, setNumObj] = useState(0)
  const [doneScreen, setDoneScreen] = useState(false)

  const nextPic = () => {
    if (numListPic < category[numObj].list[numList].pic.length - 1) {
      setNumListPic(numListPic + 1)
      
    } else {
      setDoneScreen(true)
    }
  }
  const reset = () => {
    setNumListPic(0)
    setDoneScreen(false)
  }

 
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
          <View style={{marginTop: 30}}>
            {/* <DoAn/> */}
          <TouchableHighlight
            onPress={() => {console.log(category[0].objTitle);}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row' }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
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
                  source={category[0].objIcon}
                  style={{ alignSelf: 'center', marginTop: 5 }}
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>
          
          <View style={{marginTop: 30}}>
          <TouchableHighlight
            onPress={() => {console.log(category[1].objTitle);}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row' }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
                    {category[1].objTitle}
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
                  source={category[1].objIcon}
                  style={{ alignSelf: 'center', marginTop: 5 }}
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>

          <View style={{marginTop: 30}}>
          <TouchableHighlight
            onPress={() => {console.log(category[2].objTitle);}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row' }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
                    {category[2].objTitle}
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
                  source={category[2].objIcon}
                  style={{ alignSelf: 'center', marginTop: 5 }}
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>

          <View style={{marginTop: 30}}>
          <TouchableHighlight
            onPress={() => {console.log(category[3].objTitle);}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row' }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
                    {category[3].objTitle}
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
                  source={category[3].objIcon}
                  style={{ alignSelf: 'center', marginTop: 5 }}
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>

          <View style={{marginTop: 30}}>
          <TouchableHighlight
            onPress={() => {console.log(category[4].objTitle);}}
            underlayColor={'#FFFFFF'}
          >
            <View style={{ justifyContent: 'center' ,alignSelf: 'center', flexDirection: 'row' }}>
              <View
                style={styles.buttonObj}
              >
                <View
                  style={{
                    marginVertical: '2%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '700', fontSize: 25 }}>
                    {category[4].objTitle}
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
                  source={category[4].objIcon}
                  style={{ alignSelf: 'center', marginTop: 5 }}
                />
              </View>
            </View>
          </TouchableHighlight>
          </View>

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
  buttonObj: {
    width: '70%',
    height: '100%',
    backgroundColor: '#FFAC30',
    borderWidth: 1,
    borderColor: '#FFAC30',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#ade2e6',
  },
  background: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
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

export default Home;

import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { Button, Checkbox } from 'react-native-paper';

function Signin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={{ marginLeft: 40, marginTop: 20 }}>
        <Image source={require('../assets/happy.png')} style={{}} />
      </View>
      <View>
        <View>
          <View
            style={{
              width: 319,
              height: 523,
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              borderRadius: 20,
              alignItems: 'center',
            }}
          >
            <View style={{ top: '1%' }}>
              <Image source={require('../assets/logo.png')} />
            </View>

            <View style={{ top: '1%' }}>
              <Text
                style={{ color: '#FFAC30', fontSize: 12, fontWeight: '700' }}
              >
                Blisskidz{' '}
              </Text>
            </View>
            <View style={{ marginTop: 19 }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  fontSize: 20,
                  lineHeight: 30,
                  fontWeight: 'bold',
                }}
              >
                Đăng nhập
              </Text>
            </View>

            <View style={{ marginTop: 28 }}>
              <View
                style={{
                  marginHorizontal: '5%',
                  backgroundColor: 'white',
                  borderRadius: 35,
                  borderColor: '#FFAC30',
                  height: 46,
                  width: 248,
                  borderWidth: 1,
                }}
              >
                <TextInput
                  style={{
                    height: 46,
                    width: 248,
                    paddingLeft: 13,
                  }}
                  placeholder="user name"
                />
              </View>
              <View
                style={{
                  marginHorizontal: '5%',
                  backgroundColor: 'white',
                  borderRadius: 35,
                  marginTop: 7,
                  borderColor: '#FFAC30',
                  borderWidth: 1,
                  height: 46,
                  width: 248,
                }}
              >
                <TextInput
                  style={{
                    height: 46,
                    width: 248,
                    paddingLeft: 13,
                  }}
                  secureTextEntry={true}
                  placeholder="password"
                />
              </View>
            </View>
            <View style={{ marginTop: 56 }}>
              <Button
                style={{
                  borderRadius: 35,
                  width: 248,
                  height: 46,
                  backgroundColor: '#FFAC30',
                  justifyContent: 'center',
                }}
                mode="contained"
                onPress={() => navigation.navigate('Tabs')}
              >
                {' '}
                Đăng nhập{' '}
              </Button>
            </View>

            <View style={{ marginTop: 29 }}>
              <Text>hoặc tiếp tục với</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
              <View
                style={{
                  width: 140,
                  height: 38,
                  borderRadius: 6,
                  backgroundColor: '#EEF1F4',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '5%',
                }}
              >
                <Image
                  source={require('../assets/facebook_icon.png')}
                  style={{ marginRight: 11.5 }}
                />
                <Text>Facebook</Text>
              </View>

              <View
                style={{
                  width: 140,
                  height: 38,
                  borderRadius: 6,
                  backgroundColor: '#EEF1F4',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 18,
                }}
              >
                <Image
                  source={require('../assets/google_icon.png')}
                  style={{ marginRight: 11.5 }}
                />
                <Text>Google</Text>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ textAlign: 'center' }}>
                Bạn đã có tài khoản chưa?{' '}
                <Text style={{ color: '#FFAC30' }}>Đăng ký</Text>
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Image
            source={require('../assets/hoatiet.png')}
            resizeMode="cover"
            style={{ width: '110%' }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ade2e6',
  },
});

export default () => {
  return <Signin />;
};

import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Button, List } from 'react-native-paper';
import { category } from '../components/data';
function Splash({ navigation }) {
  
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
              height: 431,
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              borderRadius: 20,
              alignItems: 'center',
              top: '2%',
            }}
          >
            <View style={{ top: '5%' }}>
              <Image source={require('../assets/logo.png')} />
            </View>
            <View style={{ top: '7%' }}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 15,
                  textAlign: 'center',
                  color: '#FFAC30',
                }}
              >
                Blisskidz
              </Text>
            </View>

            <View style={{ top: '5%' }}>
              <Text
                style={{ fontWeight: '400', fontSize: 14, textAlign: 'center' }}
              >
                {'\n'}Nhấn vào Chấp nhận và Tiếp tục để {'\n'} xác nhận bạn đã
                xem lại và chấp nhận.{'\n'} Điều khoản sử dụng và chính sách bảo{' '}
                {'\n'} bảo mật của chúng tôi
              </Text>
            </View>

            <View style={{ top: '10%' }}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, textAlign: 'center' }}
              >
                {'\n'}Điều khoản sử dụng
              </Text>
            </View>

            <View style={{ top: '10%' }}>
              <Text
                style={{ fontWeight: '700', fontSize: 12, textAlign: 'center' }}
              >
                Chính Sách Sử Dụng{' '}
              </Text>
            </View>

            <View style={{ top: '25%' }}>
            <Image source={category.doAn.list[2].pic[7]} style={{height:100, width: 100}}/>
              <Button
                style={{
                  width: 264,
                  height: 60,
                  justifyContent: 'center',
                  borderRadius: 30,
                  backgroundColor: '#FFAC30',
                }}
                mode="contained"
                onPress={() => navigation.navigate('Sign in')}
              >
                {' '}
                ĐỒNG Ý VÀ TIẾP TỤC{' '}
              </Button>
            </View>
            
            <View style={{ top: '30%' }}>
              <Text style={{ fontSize: 14, textAlign: 'center' }}>
                Bạn đã có tài khoản chưa ? {''}
                <Text
                  onPress={() => Alert.alert('HI')}
                  style={{ color: '#5EA466' }}
                >
                  Đăng ký{' '}
                </Text>
              </Text>
            </View>
          </View>
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ade2e6',
  },
});

export default Splash;

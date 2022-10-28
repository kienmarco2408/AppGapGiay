import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
function Read({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginTop: StatusBar.currentHeight }}
        contentContainerStyle={{ paddingBottom: "10%" }}
      >
        <View style={styles.background}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: "#ade2e6",
            }}
          >
            <Image
              style={{ width: "15%", height: 40, left: "-340%" }}
              source={require("../assets/happy.png")}
            />
          </View>

          <View style={{ left: "3%" }}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Tác dụng của Origami đối với con người{" "}
            </Text>
          </View>

          <View style={{ marginTop: "10%",  left: "3%" }}>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>
              Origami là nghệ thuật gấp giấy rất nhẹ nhàng, đòi hỏi tự tỉ mỉ của
              người gấp. Việc gấp giấy này theo nhiều chứng minh là giúp cho
              thần kinh được êm dịu, giảm stresss, chữa bệnh mất ngủ. Nhiều bác
              sĩ đã sử dụng Origami như một liệu pháp bổ ích đối với người bệnh.
              Nhiều người coi Origami là một trò giải trí tuyệt vời, họ tự tìm
              tòi để nghĩ ra những thứ mới, mang đậm màu sắc của mình thì cảm
              giác rất vui thích.
            </Text>
          </View>

          <View style={{ marginTop: "10%",  left: "10%" }}>
            <Image source={require("../assets/22.png")}></Image>
          </View>

          <View style={{ marginTop: "10%",  left: "3%" }}>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>
              Bài viết trên đã hướng dẫn cho bạn cách gấp giấy Origami Nhật Bản
              độc đáo và phổ biến nhất hiện nay. Hãy cùng gấp và chia sẻ những
              sản phẩm cho chúng tôi qua Fanpage Người Việt ở Nhật Bản sau
              nhé.Bạn có thể quan tâm: Những nét thú vị trong văn hóa trả đạo
              Nhật Bản Chúc bạn thành công!
            </Text>
          </View>

          <View style={{ marginTop: "10%" }}>
            <Image source={require("../assets/hoatiet.png")} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ade2e6",
  },
  background: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
export default Read;

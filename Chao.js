import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Chao = () => {
  const navigation = useNavigation();

  // Hàm xử lý chạm vào màn hình
  const handlePress = () => {
    navigation.navigate('Gioithieu1'); // Chuyển đến màn hình 'Gioithieu1'
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {/* Hiển thị logo */}
        <Image
          source={require('../Appbanhoa/Image/Chao.png')} // Đường dẫn đến logo bạn đã tải lên
          style={styles.logo}
        />

        {/* Hiển thị tên thương hiệu */}
        <Text style={styles.title}></Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Màu nền trắng
  },
  logo: {
    width: 200, // Chiều rộng logo
    height: 200, // Chiều cao logo
    resizeMode: 'contain', // Đảm bảo hình ảnh giữ tỉ lệ khung hình
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000', // Màu chữ đen
    fontFamily: 'Cursive', // Kiểu chữ giống như hình
  },
});

export default Chao;

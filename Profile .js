import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
const Profile  = () => {
  return (
    <View style={styles.container}>
      {/* Logo và các biểu tượng */}
      <View style={styles.headerRow}>
        <View style={styles.headerImageContainer}>
          <Image
            source={require('../Appbanhoa/Image/Chao.png')} // Thay đổi đường dẫn đến ảnh bạn đã tải lên
            style={styles.headerImage}
          />
        </View>

        {/* Biểu tượng cài đặt, giỏ hàng, chat */}
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={require('../Appbanhoa/Image/caidat.png')} // Thay đổi đường dẫn đến ảnh biểu tượng cài đặt
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../Appbanhoa/Image/giohang.png')} // Thay đổi đường dẫn đến ảnh biểu tượng giỏ hàng
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../Appbanhoa/Image/chat.png')} // Thay đổi đường dẫn đến ảnh biểu tượng chat
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Tiếp tục các thành phần khác của Profile */}
      <View style={styles.header}>
        {/* Avatar và tên người dùng */}
        <View style={styles.userInfo}>
          <Image
            source={require('../Appbanhoa/Image/shipper.png')} // Đường dẫn đến avatar người dùng
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.username}>congduc0101</Text>
            <Text style={styles.userStats}>99 Người theo dõi | 10 Đang theo dõi</Text>
          </View>
        </View>
      </View>

      {/* Thanh công cụ */}
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolbarButton}>
          <Image source={require('../Appbanhoa/Image/The.png')} style={styles.icon} />
          <Text style={styles.toolbarText}>Công nợ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolbarButton}>
          <Image source={require('../Appbanhoa/Image/Tichdiem.png')} style={styles.icon} />
          <Text style={styles.toolbarText}>Tích điểm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolbarButton}>
          <Image source={require('../Appbanhoa/Image/vixu.png')} style={styles.icon} />
          <Text style={styles.toolbarText}>Ví xu</Text>
        </TouchableOpacity>
      </View>
      {/* Danh sách chức năng */}
      <ScrollView style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const menuItems = [
  { title: 'Đơn hàng' },
  { title: 'Lịch sử mua hàng' },
  { title: 'Hoa yêu thích' },
  { title: 'Địa chỉ của bạn' },
  { title: 'Đổi mật khẩu' },
  { title: 'Cài đặt tài khoản' },
  { title: 'Danh sách quà tặng' },
  { title: 'Tích điểm' },
  { title: 'Ví xu' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain', // Tùy chỉnh để ảnh hiển thị đúng kích thước
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 20, // Khoảng cách giữa các biểu tượng
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userDetails: {
    marginLeft: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStats: {
    fontSize: 14,
    color: '#777',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  toolbarButton: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  toolbarText: {
    marginTop: 5,
    fontSize: 12,
    color: '#777',
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  icon: {
    width: 20, // Điều chỉnh kích thước chiều rộng của icon
    height: 20, // Điều chỉnh kích thước chiều cao của icon
    marginLeft: 15, // Khoảng cách giữa các biểu tượng
  },
});

export default Profile;

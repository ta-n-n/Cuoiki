import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Giohang = ({ navigation }) => {
  // Dữ liệu giỏ hàng mẫu
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Tulip', price: 20500, quantity: 7, image: require('../Appbanhoa/Image/flower1.png') },
    { id: 2, name: 'Daffodil', price: 30000, quantity: 10, image: require('../Appbanhoa/Image/flower2.png') },
    { id: 3, name: 'White roses', price: 15000, quantity: 1, image: require('../Appbanhoa/Image/flower3.png') },
    { id: 4, name: 'Red lily', price: 19000, quantity: 4, image: require('../Appbanhoa/Image/flower4.png') },
  ]);

  // Hàm tăng số lượng sản phẩm
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Hàm giảm số lượng sản phẩm
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Hàm tính tổng giá trị
  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleOrder = () => {
    // Điều hướng sang màn hình Address ngay lập tức
    navigation.navigate('Address');
  };
  
  
  
  // Hàm render mỗi mục trong giỏ hàng
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price.toLocaleString('vi-VN')}đ</Text>
        <TouchableOpacity>
          <Text style={styles.addToFavorites}>thêm vào mục yêu thích</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
          <FontAwesome name="minus" size={20} color="gray" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
          <FontAwesome name="plus" size={20} color="pink" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giỏ hàng</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.footer}>
        <Text style={styles.totalText}>Tổng thanh toán</Text>
        <Text style={styles.totalAmount}>{getTotal().toLocaleString('vi-VN')}đ</Text>
        <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
          <Text style={styles.orderButtonText}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#999',
  },
  addToFavorites: {
    fontSize: 12,
    color: 'green',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  totalText: {
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Giohang;

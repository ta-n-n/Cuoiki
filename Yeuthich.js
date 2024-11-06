import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Yeuthich = ({ navigation }) => {
  const flowers = [
    { id: 1, name: 'Bowl Flower', price: '75.000đ', description: 'Tặng quà kèm thẻ hội viên', image: require('../Appbanhoa/Image/Bowlflower.png') },
    { id: 2, name: 'Ele Bouquet', price: '100.000đ', description: 'Kích thước lớn kèm theo thiệp chúc mừng', image: require('../Appbanhoa/Image/eleBouquet.png') },
    { id: 3, name: 'Baby Bouquet', price: '90.000đ', description: 'Kích thước trung bình đến lớn, thiệp chúc mừng miễn phí', image: require('../Appbanhoa/Image/BabyBouquet.png') },
  ];

  const individualFlowers = [
    { id: 4, name: 'Hoa hồng đỏ', price: '5.000đ', image: require('../Appbanhoa/Image/Hoahongdo.png') },
    { id: 5, name: 'Hoa huệ trắng', price: '12.000đ', image: require('../Appbanhoa/Image/Hoahuetrang.png') },
  ];

  const accessories = [
    { id: 6, name: 'Sử dụng làm chỗ dựa cho hoa', image: require('../Appbanhoa/Image/Hoahuetrang.png') },
  ];

  return (
    <View style={styles.container}>
  {/* Header */}
  <View style={styles.header}>
    {/* Biểu tượng cho Cart (ảnh) */}
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}style={styles.cartIcon}>
      <Image
        source={require('../Appbanhoa/Image/Shopping.png')} // Đường dẫn đến ảnh cho Cart
        style={styles.iconImage} // Style cho ảnh
      />
    </TouchableOpacity>

    {/* Biểu tượng cho Chat (ảnh) */}
    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
      <Image
        source={require('../Appbanhoa/Image/Comment.png')} // Đường dẫn đến ảnh cho Chat
        style={styles.iconImage} // Style cho ảnh
      />
    </TouchableOpacity>
  </View>
      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Bó hoa Section */}
        <Text style={styles.sectionTitle}>Bó hoa</Text>
        {flowers.map((flower) => (
          <View key={flower.id} style={styles.itemContainer}>
            <Image source={flower.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{flower.name}</Text>
              <Text style={styles.itemDescription}>{flower.description}</Text>
              <Text style={styles.itemPrice}>{flower.price}</Text>
            </View>
            <TouchableOpacity>
              <FontAwesome name="heart-o" size={24} color="pink" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Hoa Section */}
        <Text style={styles.sectionTitle}>Hoa</Text>
        {individualFlowers.map((flower) => (
          <View key={flower.id} style={styles.itemContainer}>
            <Image source={flower.image} style={styles.itemImageSmall} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{flower.name}</Text>
              <Text style={styles.itemPrice}>{flower.price}</Text>
            </View>
            <TouchableOpacity>
              <FontAwesome name="heart-o" size={24} color="pink" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Phụ kiện Section */}
        <Text style={styles.sectionTitle}>Phụ kiện</Text>
        {accessories.map((accessory) => (
          <View key={accessory.id} style={styles.itemContainer}>
            <Image source={accessory.image} style={styles.itemImageSmall} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{accessory.name}</Text>
            </View>
            <TouchableOpacity>
              <FontAwesome name="heart-o" size={24} color="pink" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignItems: 'center',
    },
    cartIcon: {
        marginLeft: 260, 
      },
    iconImage: {
      width: 24, // Chiều rộng của ảnh icon
      height: 24, // Chiều cao của ảnh icon
      resizeMode: 'contain', // Giúp ảnh không bị méo
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
      marginLeft: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginHorizontal: 20,
      marginVertical: 5,
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    itemImage: {
      width: 60,
      height: 60,
      borderRadius: 10,
    },
    itemImageSmall: {
      width: 40,
      height: 40,
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
    itemDescription: {
      fontSize: 12,
      color: '#999',
    },
    itemPrice: {
      fontSize: 14,
      color: '#999',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: '#f2f2f2',
    },
    footerText: {
      fontSize: 12,
      textAlign: 'center',
      color: '#555',
    },
  });
  

export default Yeuthich;

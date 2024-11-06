import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import thư viện icon
import Trangchu from './Trangchu';
import Yeuthich from './Yeuthich';
import Thongbao from './Thongbao';
import Profile  from './Profile '; // Xóa khoảng trắng dư thừa

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Trangchu"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Trangchu') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Yeuthich') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Thongbao') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Trangchu" component={Trangchu} options={{ tabBarLabel: 'Trang chủ' }} />
      <Tab.Screen name="Yeuthich" component={Yeuthich} options={{ tabBarLabel: 'Yêu thích' }} />
      <Tab.Screen name="Thongbao" component={Thongbao} options={{ tabBarLabel: 'Thông báo' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
}

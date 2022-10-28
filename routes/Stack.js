import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import News from '../screens/News';
import Signin from '../screens/Signin';
import Detail from '../components/Detail';
import Detail2 from '../components/Detail2';
import FoodDetail from '../components/FoodDetail';
import Users from '../screens/Users';

import CaiBap from '../components/Caibap';
import CaiBap2 from '../components/Caibap2';
import CaiBap3 from '../components/Caibap3';
import CaiBap4 from '../components/Caibap4';
import CaiBap5 from '../components/Caibap5';
import CaiBap6 from '../components/Caibap6';
import CaiBap7 from '../components/Caibap7';
import CaiBap8 from '../components/Caibap8';

import Read from '../components/Read';
import Chat from '../screens/Chat';

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
      <HomeStack.Screen name="Detail2" component={Detail2} />
      <HomeStack.Screen name="C1" component={CaiBap} />
      <HomeStack.Screen name="C2" component={CaiBap2} />
      <HomeStack.Screen name="C3" component={CaiBap3} />
      <HomeStack.Screen name="C4" component={CaiBap4} />
      <HomeStack.Screen name="C5" component={CaiBap5} />
      <HomeStack.Screen name="C6" component={CaiBap6} />
      <HomeStack.Screen name="C7" component={CaiBap7} />
      <HomeStack.Screen name="C8" component={CaiBap8} />
    </HomeStack.Navigator>
  );
}

const ChatStack = createNativeStackNavigator();
function ChatStacks() {
  return (
    <RankingStack.Navigator screenOptions={{ headerShown: false }}>
      <RankingStack.Screen name="Chat Stack" component={Chat} />
    </RankingStack.Navigator>
  );
}

const NewsStack = createNativeStackNavigator();
function NewsStacks() {
  return (
    <NewsStack.Navigator screenOptions={{ headerShown: false }}>
      <NewsStack.Screen name="News Stack" component={News} />
    </NewsStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator();
function UserStacks() {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="User Stack" component={Users} />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#FFF9EC',
          width: '100%',
          height: '7%',
          shadowColor: '#FFF9EC',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFAC30' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../assets/news.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFAC30' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../assets/chat.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFAC30' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Users"
        component={UserStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '-5%',
              }}
            >
              <Image
                source={require('../assets/user.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FFAC30' : '#B8B8B8',
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootStacks = createNativeStackNavigator();
function RootStack() {
  return (
    <NavigationContainer>
      <RootStacks.Navigator screenOptions={{ headerShown: false }}>
        <RootStacks.Screen name="Splash" component={Splash} />
        <RootStacks.Screen name="Sign in" component={Signin} />

        <RootStacks.Screen name="Tabs" component={Tabs} />

        <RootStacks.Screen name="Food" component={FoodDetail} />

        <RootStacks.Screen name="Read" component={Read} />
      </RootStacks.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;

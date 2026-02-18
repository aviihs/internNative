import { Tabs } from "expo-router";
import React from "react";
import { Home, Search, Bell, View, User, Settings } from "lucide-react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 52,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="first"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: 10,
              }}
            >
              <User size={25} color={focused ? "#fff" : "#A8B5DB"} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="second"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: 12,
              }}
            >
              <Search size={24} color={focused ? "#fff" : "#A8B5DB"} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Home size={26} color={focused ? "#fff" : "#A8B5DB"} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="third"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: 14,
              }}
            >
              <Bell size={24} color={focused ? "#fff" : "#A8B5DB"} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="fourth"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: 14,
              }}
            >
              <Settings size={24} color={focused ? "#fff" : "#A8B5DB"} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

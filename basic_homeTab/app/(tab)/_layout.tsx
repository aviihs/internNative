import { Tabs } from "expo-router";
import React from "react";
import {
  Home,
  Settings,
  Table,
  ClipboardList,
  User,
} from "lucide-react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#007aff",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="first"
        options={{
          title: "Tables",
           tabBarIcon: ({ color, size, focused }) => (
            <Table size={focused ? size + 3 : size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="second"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, size, focused }) => (
            <ClipboardList size={focused ? size + 3 : size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Home size={focused ? size + 3 : size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="third"
        options={{
          title: "User",
          tabBarIcon: ({ color, size, focused }) => (
            <User size={focused ? size + 3 : size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="fourth"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Settings size={focused ? size + 3 : size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

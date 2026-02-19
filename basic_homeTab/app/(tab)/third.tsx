import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Image, Pressable, Alert } from "react-native";
import { UserProfile } from "../../interface/interfaces";
import { useRouter } from "expo-router";

const User = () => { 
  const router = useRouter();

  const user: UserProfile = {
    id: 1,
    name: "Shiva Bhusal",
    email: "@shivabhusal",
    avatar: "",
    totalOrders: 12,
  };

  const options = [
    { title: "Settings" },
    { title: "My Orders" },
    { title: "Address" },
    { title: "Change Password" },
    { title: "Help & Support" },
    { title: "Log out" },
  ];

  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  const toggleOption = (title: string) => {
    switch (title) {
      case "Settings":
    setExpandedOption(null); 
    router.push("/fourth"); 
    break;
      case "Change Password":
      case "Help & Support":
      case "Log out":
        Alert.alert(title, renderContent(title));
        break;
      default:
        if (expandedOption === title) {
          setExpandedOption(null);
        } else {
          setExpandedOption(title);
        }
    }
  };

  const renderContent = (title: string) => {
    switch (title) {
      case "Settings":
        return "Go to Settings Tabs...";
      case "My Orders":
        return `You have ${user.totalOrders} total orders.`;
      case "Address":
        return "Your saved address: 123 Street, Kathmandu";
      case "Change Password":
        return "Change password form here...";
      case "Help & Support":
        return "Help & Support info here...";
      case "Log out":
        return "Logging out...";
      default:
        return "";
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView contentContainerStyle={{ padding: 20 }}>

        <View className="flex-row items-center mb-6">
          <Text className="text-2xl font-bold text-slate-900">Profile</Text>
        </View>


        <View className="items-center mb-6">
          {user.avatar ? (
            <Image
              source={{ uri: user.avatar }}
              className="w-24 h-24 rounded-full mb-2"
            />
          ) : (
            <View className="w-24 h-24 rounded-full bg-slate-300 mb-2 justify-center items-center">
              <Text className="text-3xl text-white font-bold">
                {user.name[0]}
              </Text>
            </View>
          )}
          <Text className="text-xl font-bold text-slate-900">{user.name}</Text>
          <Text className="text-slate-500 mb-2">{user.email}</Text>
          <Text className="text-slate-500 mb-4">Total Orders: {user.totalOrders}</Text>

          <Pressable className="bg-[#007aff] px-6 py-2 rounded-full active:opacity-80">
            <Text className="text-white font-semibold">Edit Profile</Text>
          </Pressable>
        </View>

        <View className="bg-white rounded-2xl shadow-md overflow-hidden">
          {options.map((item, index) => (
            <View key={index}>
              <Pressable
                className="flex-row justify-between items-center px-5 py-4 border-b border-slate-200"
                onPress={() => toggleOption(item.title)}
              >
                <Text className="text-slate-900 text-base">{item.title}</Text>
              </Pressable>

              {(item.title === "My Orders" || item.title === "Address") &&
                expandedOption === item.title && (
                  <View className="bg-slate-100 px-5 py-3">
                    <Text className="text-slate-800">{renderContent(item.title)}</Text>
                  </View>
                )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;
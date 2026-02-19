import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Alert } from "react-native";
import SettingsItem from "../../components/SettingItems";

const Settings = () => {
  const settingsOptions = [
    {
      title: "Account",
      description: "Manage your account settings.\nChange your password and profile info.",
    },
    {
      title: "Notifications",
      description: "Customize your notifications.\nEnable or disable push alerts.",
    },
    {
      title: "Privacy",
      description: "Control your privacy settings.\nManage who sees your information.",
    },
    {
      title: "Help & Support",
      description: "Get help or contact support.\nFind FAQs or submit a ticket.",
    },
    {
      title: "Logout",
      description: "Sign out from your account.\nYou will need to login again.",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-3xl font-bold text-slate-900 mb-6">Settings</Text>

        <View className="flex-col">
          {settingsOptions.map((item, index) => (
            <SettingsItem
              key={index}
              title={item.title}
              onPress={() => Alert.alert(item.title, item.description)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
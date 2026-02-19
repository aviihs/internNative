import React from "react";
import { Pressable, Text } from "react-native";

interface SettingsItemProps {
  title: string;
  onPress?: () => void;
}

const SettingsItem = ({ title, onPress }: SettingsItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white p-4 rounded-2xl shadow-md w-full mb-4 active:opacity-80"
    >
      <Text className="text-lg text-slate-900">{title}</Text>
    </Pressable>
  );
};

export default SettingsItem;


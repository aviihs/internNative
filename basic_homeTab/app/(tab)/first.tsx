import { Pressable, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const first = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="mb-8">
          <Text className="text-3xl font-bold text-slate-900">First Tab</Text>
          <Text className="text-slate-600 mt-1">
            This is the first tab. Explore the content and enjoy!
          </Text>
        </View>


          <View className="bg-white p-5 rounded-2xl shadow-md">
            <Text className="text-xl font-semibold text-slate-950 mb-2">
              FirstTab Content:
            </Text>
            <Text className="text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              velit quo eum. Suscipit veritatis dolore facere odit minima sequi
              sunt, eius ea, molestiae officia placeat ipsam nostrum omnis fuga
              eligendi.
            </Text>
          </View>


        <Pressable
          className="bg-[#0f0D23] mt-4 py-4 rounded-2xl shadow-lg active:opacity-80"
          onPress={() => alert("Button Pressed")}
        >
          <Text className="text-white text-center font-semibold text-base">
            Click First Tab
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default first;

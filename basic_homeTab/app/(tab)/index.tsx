import { Text, View, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
      >
        <View className="mb-8">
          <Text className="text-3xl font-bold text-slate-900">
            Welcome Back To Home!
          </Text>
          <Text className="text-slate-600 mt-1">
            Explore your dashboard and latest updates
          </Text>
        </View>

        <View className="space-y-4">
          <View className="bg-white p-5 rounded-2xl shadow-md">
            <Text className="text-xl font-semibold text-slate-950 mb-2">
              Delivery Summary
            </Text>
            <Text className="text-slate-700">
              Lorem ipsum dolor sit amet.
            </Text>
          </View>

          <View className="bg-white mt-2 p-5 rounded-2xl shadow-md">
            <Text className="text-xl font-semibold text-slate-950 mb-2">
              Notifications
            </Text>
            <Text className="text-slate-700">
              You have 3 new messages and 5 tasks pending.
            </Text>
          </View>
        </View>


        <Pressable
          className="bg-[#007aff] mt-4 py-4 rounded-2xl shadow-lg active:opacity-80"
          onPress={() => alert("Button Pressed")}
        >
          <Text className="text-white text-center font-semibold text-base">
            Get Started
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

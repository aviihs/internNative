import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import { Order } from "../../interface/interfaces";
import OrderCard from "@/components/OrderCard";

const Orders = () => {
  const orders: Order[] = [
    { id: 1, item: "Pizza ", quantity: 2, price: 15.99, status: "pending" },
    { id: 2, item: "Pasta ", quantity: 1, price: 12.5, status: "completed" },
    { id: 3, item: "Coke", quantity: 3, price: 3.0, status: "completed" },
    { id: 4, item: "Burger", quantity: 2, price: 10.0, status: "cancelled" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-3xl font-bold text-slate-900 mb-6">My Orders</Text>

        <View className="flex-col">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
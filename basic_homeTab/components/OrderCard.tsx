import React from "react";
import { Pressable, Text, View } from "react-native";
import { Order } from "../interface/interfaces";
import { ORDER_STATUS_STYLES } from "../constant/STATUS_STYLES";

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  const getStatusColor = (status: string) => {
    return ORDER_STATUS_STYLES[status] ?? "bg-gray-300";
  };

  return (
    <Pressable
      className="bg-white p-5 rounded-3xl shadow-md w-full mb-4 active:opacity-80"
      onPress={() => alert(`Order ${order.id} clicked`)}
    >
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-bold text-slate-900">{order.item}</Text>

        <View className={"px-3 py-1 rounded-full shadow-sm"} style={{ backgroundColor: getStatusColor(order.status) }}>
          <Text className="text-gray-800 text-xs font-semibold capitalize">
            {order.status}
          </Text>
        </View>
      </View>

      <Text className="text-slate-700 text-sm">
        Quantity: {order.quantity}
      </Text>
      <Text className="text-slate-700 text-sm">
        Price: ${order.price.toFixed(2)}
      </Text>
    </Pressable>
  );
};

export default OrderCard;
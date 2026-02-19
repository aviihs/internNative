import React from "react";
import { Pressable, Text, View } from "react-native";
import { Table } from "../interface/interfaces";
import { STATUS_STYLES } from "../constant/STATUS_STYLES";

interface TableCardProps {
  table: Table;
}

const TableCard = ({ table }: TableCardProps) => {
  const getStatusColor = (status: string) => {
    // return STATUS_STYLES[status] ?? "bg-gray-300";
    return STATUS_STYLES[status] ?? "#d1d5db";
  };

  return (
    <Pressable
      className="bg-white p-5 rounded-3xl shadow-md w-full mb-4 active:opacity-80"
      onPress={() => alert(`${table.name} clicked`)}
    >
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-bold text-slate-900">{table.name}</Text>

        {/* <View
          className={`px-3 py-1 rounded-full shadow-sm ${getStatusColor(table.status)}`}
        >*/}<View 
  className="px-3 py-1 rounded-full shadow-sm"
  style={{ backgroundColor: getStatusColor(table.status)}}
>

          <Text className="text-gray-800 text-xs font-semibold capitalize">
            {table.status}
          </Text>
        </View>
      </View>

      <Text className="text-slate-700 text-sm">
        Seats: {table.seats} {table.seats > 1 ? "people" : "person"}
      </Text>
    </Pressable>
  );
};

export default TableCard;

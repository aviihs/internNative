import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View, Text } from "react-native";
import React from "react";
import TableCard from "@/components/TableCard";
import { Table } from "../../interface/interfaces";

const FirstTab = () => {
  const tables: Table[] = [
    { id: 1, name: "Table 1", seats: 4, status: "available" },
    { id: 2, name: "Table 2", seats: 2, status: "occupied" },
    { id: 3, name: "Table 3", seats: 6, status: "reserved" },
    { id: 4, name: "Table 4", seats: 4, status: "available" },
    { id: 5, name: "Table 5", seats: 2, status: "occupied" },
    { id: 6, name: "Table 6", seats: 6, status: "reserved" },
    { id: 7, name: "Table 7", seats: 4, status: "available" },
    { id: 8, name: "Table 8", seats: 2, status: "occupied" },
    { id: 9, name: "Table 9", seats: 6, status: "available" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-3xl font-bold text-slate-900 mb-6">
          Restaurant Tables
        </Text>

        <View className="flex-col">
          {tables.map((table) => (
            <TableCard key={table.id} table={table} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstTab;
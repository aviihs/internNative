export type TableStatus = "available" | "occupied" | "reserved";

export interface Table {
  id: number;
  name: string;
  seats: number;
  status: "available" | "occupied" | "reserved";
}

export type OrderStatus = "pending" | "completed" | "cancelled";

export interface Order {
  id: number;
  item: string;
  quantity: number;
  price: number;
  status: OrderStatus;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  totalOrders: number;
  avatar?: string; 
}
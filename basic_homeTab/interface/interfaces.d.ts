export type TableStatus = "available" | "occupied" | "reserved";

export interface Table {
  id: number;
  name: string;
  seats: number;
  status: TableStatus;
}
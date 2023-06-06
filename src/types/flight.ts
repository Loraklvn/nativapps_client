export type Flight = {
  id: number;
  price: number;
  departure_time: string;
  arrival_time: string;
  origin: string;
  destination: string;
};

export type FlightData = {
  total: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  flights: Flight[];
};

export type FlightResponse = {
  status: string;
  data: FlightData;
};

import { Flight } from './flight';

export type ReservationDetails = {
  created_at: string;
  flight: Flight;
  flight_id: number;
  status: string;
  user_id: number;
};

export type ReservationRespone = {
  status: string;
  data: ReservationDetails;
};
export type ReservationResponeQuery = {
  data: { reservations: ReservationDetails[] };
};

import { AxiosResponse } from 'axios';

import {
  ReservationRespone,
  ReservationResponeQuery,
} from '../../types/reservation';
import { WEB_API_URL, getRequest, postRequest } from '../helpers';

export const getReservations = async (): Promise<
  AxiosResponse<ReservationResponeQuery>
> => {
  return await getRequest<ReservationResponeQuery>(
    `${WEB_API_URL}/reservation`
  );
};

export const bookReservation = (
  flightId: number
): Promise<AxiosResponse<ReservationRespone>> => {
  return postRequest<ReservationRespone>(`${WEB_API_URL}/reservation`, {
    flightId,
  });
};

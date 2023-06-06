import { AxiosResponse } from 'axios';

import { ReservationRespone } from '../../types/reservation';
import { WEB_API_URL, postRequest } from '../helpers';

export const bookReservation = (
  flightId: number
): Promise<AxiosResponse<ReservationRespone>> => {
  return postRequest<ReservationRespone>(`${WEB_API_URL}/reservation`, {
    flightId,
  });
};

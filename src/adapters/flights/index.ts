import { AxiosResponse } from 'axios';

import { FlightResponse } from '../../types/flight';
import { WEB_API_URL, getRequest } from '../helpers';

export type FlightsUrlParams = {
  page?: number;
  pageSize?: number;
  origin?: string;
  destination?: string;
  sortBy?: string;
  sortOrder?: string;
};

export const getFlights = async (
  params: FlightsUrlParams
): Promise<AxiosResponse<FlightResponse>> => {
  return await getRequest<FlightResponse>(`${WEB_API_URL}/flight`, { params });
};

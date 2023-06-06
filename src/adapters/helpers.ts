import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const WEB_API_URL = import.meta.env.VITE_API_URL;

type RequestHeaders = {
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
};

const getResponseParams = (): RequestHeaders => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export function postRequest<T>(
  url: string,
  data: Record<string, unknown>
): Promise<AxiosResponse<T>> {
  const config = getResponseParams();
  const result = axios.post(url, data, config);

  return result;
}

export function putRequest<T>(
  url: string,
  data: Record<string, unknown>
): Promise<AxiosResponse<T>> {
  const config = getResponseParams();
  const result = axios.put(url, data, config);

  return result;
}

export function getRequest<T>(
  url: string,
  customConfig: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  const config = getResponseParams();

  return axios.get(url, { ...config, ...customConfig });
}

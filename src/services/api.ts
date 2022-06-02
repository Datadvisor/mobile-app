/* eslint-disable import/named */
import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { apiConstants } from '../utils/constants';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        withCredentials: true,
      });

      return {
        data: result.data,
        meta: {
          response: {
            status: result.status,
            headers: result.headers,
          },
          request: result.request,
        },
      };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: axiosBaseQuery({
    baseUrl: apiConstants.apiUrl,
  }),
  endpoints: () => ({}),
  tagTypes: ['User'],
});

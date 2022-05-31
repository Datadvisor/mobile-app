/* eslint-disable import/named */
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchArgs,
  BaseQueryFn,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { apiConstants } from '../utils/constants';

// const baseQuery = fetchBaseQuery({
//   baseUrl: apiConstants.apiUrl,
//   prepareHeaders: (headers) => {
//     // Prepare session cookie

//     return headers;
//   },
// });

// const baseQueryWithCookieSet: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError,
//   Record<string, unknown>,
//   FetchBaseQueryMeta
// > = async (args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions);

//   console.log(JSON.stringify(result));

//   if (result.meta.response.headers.has('set-cookie')) {
//     console.log(result.meta.response.headers.get('set-cookie'));
//     console.log('goood');
//   }

//   return result;
// };
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
console.log(result.status);

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
      console.log(err.response);
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

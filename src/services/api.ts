import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiConstants } from '../utils/constants';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiConstants.apiUrl,
  }),
  endpoints: () => ({}),
  tagTypes: ['User'],
});

import { rtkApi } from './api';

export type LoginDto = {
  email: string;
  password: string;
};

const authApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, LoginDto>({
      query: (data) => ({
        method: 'POST',
        url: '/auth/signin',
        data,
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: '/auth/signout',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;

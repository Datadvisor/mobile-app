import { rtkApi } from './api';

export type LoginDto = {
  email: string;
  password: string;
};

const authApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query<void, LoginDto>({
      query: (body) => ({
        method: 'POST',
        url: '/auth/signin',
        body,
      }),
      providesTags: ['User'],
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

export const { useLazyLoginQuery, useLogoutMutation } = authApi;

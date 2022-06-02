import { rtkApi } from './api';

export type User = {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UpdateUserDto = {
  email?: string;
  password?: string;
};

export type SignupDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const userApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<void, SignupDto>({
      query: (data) => ({
        method: 'POST',
        url: '/users',
        data,
      }),
    }),
    me: builder.query<User, void>({
      query: () => ({
        method: 'GET',
        url: '/users/me',
      }),
      providesTags: ['User'],
    }),
    updateUser: builder.mutation<User, UpdateUserDto & { id: string }>({
      query: ({ id, ...data }) => ({
        method: 'PATCH',
        url: `/users/${id}`,
        data,
      }),
    }),
    deleteUser: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        method: 'DELETE',
        url: `/users/${id}`,
      }),
    }),
  }),
});

export const {
  useMeQuery,
  useLazyMeQuery,
  useSignupMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

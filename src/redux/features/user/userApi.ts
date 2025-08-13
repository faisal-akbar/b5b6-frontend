import { baseApi } from "@/redux/api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
      }),
    }),
    createDeliveryPersonnel: builder.mutation({
      query: (data) => ({
        url: "/users/create-delivery-personnel",
        method: "POST",
        data,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users/all-users",
        method: "GET",
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useCreateDeliveryPersonnelMutation,
  useGetAllUsersQuery,
  useGetMeQuery,
  useGetUserByIdQuery,
} = userApi;

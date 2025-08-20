import { baseApi } from "@/redux/api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user/register",
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
        url: "/user/me",
        method: "GET",
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/user/create-admin",
        method: "POST",
        data,
      }),
    }),
    createDeliveryPersonnel: builder.mutation({
      query: (data) => ({
        url: "/user/create-delivery-personnel",
        method: "POST",
        data,
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
    blockUserById: builder.mutation({
      query: (id) => ({
        url: `/user/${id}/block-user`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useGetAllUsersQuery,
  useGetMeQuery,
  useCreateAdminMutation,
  useCreateDeliveryPersonnelMutation,
  useGetUserByIdQuery,
  useBlockUserByIdMutation,
} = userApi;

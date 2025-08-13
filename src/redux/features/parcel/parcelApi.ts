import { baseApi } from "@/redux/api/baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (data) => ({
        url: "/parcels",
        method: "POST",
        data,
      }),
    }),
    cancelParcel: builder.mutation({
      query: (id) => ({
        url: `/parcels/cancel/${id}`,
        method: "POST",
      }),
    }),
    deleteParcel: builder.mutation({
      query: (id) => ({
        url: `/parcels/delete/${id}`,
        method: "POST",
      }),
    }),
    getSenderParcels: builder.query({
      query: () => ({
        url: "/parcels/me",
        method: "GET",
      }),
    }),
    getParcelStatusLog: builder.query({
      query: (id) => ({
        url: `/parcels/${id}/status-log`,
        method: "GET",
      }),
    }),
    getIncomingParcels: builder.query({
      query: () => ({
        url: "/parcels/me/incoming",
        method: "GET",
      }),
    }),
    getReceiverHistory: builder.query({
      query: () => ({
        url: "/parcels/me/history",
        method: "GET",
      }),
    }),
    trackParcel: builder.query({
      query: (trackingId) => ({
        url: `/parcels/tracking/${trackingId}`,
        method: "GET",
      }),
    }),
    getAllParcels: builder.query({
      query: () => ({
        url: "/parcels",
        method: "GET",
      }),
    }),
    adminCreateParcel: builder.mutation({
      query: (data) => ({
        url: "/parcels/create-parcel",
        method: "POST",
        data,
      }),
    }),
    getParcelDetails: builder.query({
      query: (id) => ({
        url: `/parcels/${id}/details`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateParcelMutation,
  useCancelParcelMutation,
  useDeleteParcelMutation,
  useGetSenderParcelsQuery,
  useGetParcelStatusLogQuery,
  useGetIncomingParcelsQuery,
  useGetReceiverHistoryQuery,
  useTrackParcelQuery,
  useGetAllParcelsQuery,
  useAdminCreateParcelMutation,
  useGetParcelDetailsQuery,
} = parcelApi;

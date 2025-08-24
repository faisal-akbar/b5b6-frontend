import { baseApi } from "@/redux/api/baseApi";
import { IParcel, IParcelParams, IParcelTrackData, IResponse } from "@/types";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Sender
    createParcel: builder.mutation({
      query: (data) => ({
        url: "/parcels",
        method: "POST",
        data,
      }),
      invalidatesTags: ["SENDER_PARCEL"],
    }),
    cancelParcel: builder.mutation<unknown, { id: string; note: string }>({
      query: ({ id, note }) => ({
        url: `/parcels/cancel/${id}`,
        method: "POST",
        data: { note },
      }),
      invalidatesTags: ["SENDER_PARCEL"],
    }),
    deleteParcel: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/parcels/delete/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["SENDER_PARCEL"],
    }),
    getParcelStatusLog: builder.query({
      query: (id) => ({
        url: `/parcels/${id}/status-log`,
        method: "GET",
      }),
      providesTags: ["SENDER_PARCEL"],
    }),
    getSenderParcels: builder.query<IResponse<IParcel[]>, IParcelParams>({
      query: ({ searchTerm, page, limit, sort, currentStatus }) => ({
        url: "/parcels/me",
        method: "GET",
        params: {
          searchTerm: searchTerm,
          page: page,
          limit: limit,
          sort: sort,
          currentStatus: currentStatus,
        },
      }),
      providesTags: ["SENDER_PARCEL"],
    }),
    // Receiver
    getIncomingParcels: builder.query<IResponse<IParcel[]>, IParcelParams>({
      query: ({ searchTerm, page, limit, sort, currentStatus }) => ({
        url: "/parcels/me/incoming",
        method: "GET",
        params: {
          searchTerm: searchTerm,
          page: page,
          limit: limit,
          sort: sort,
          currentStatus: currentStatus,
        },
      }),
      providesTags: ["RECEIVER_PARCEL"],
    }),
    getReceiverParcelHistory: builder.query<
      IResponse<IParcel[]>,
      IParcelParams
    >({
      query: ({ searchTerm, page, limit, sort, currentStatus }) => ({
        url: "/parcels/me/history",
        method: "GET",
        params: {
          searchTerm: searchTerm,
          page: page,
          limit: limit,
          sort: sort,
          currentStatus: currentStatus,
        },
      }),
      providesTags: ["RECEIVER_PARCEL"],
    }),
    confirmParcelDelivery: builder.mutation({
      query: (id) => ({
        url: `/parcels/confirm/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["RECEIVER_PARCEL"],
    }),
    // admin
    getAllParcels: builder.query({
      query: () => ({
        url: "/parcels",
        method: "GET",
      }),
    }),
    getParcelById: builder.query({
      query: (id) => ({
        url: `/parcels/${id}`,
        method: "GET",
      }),
    }),
    updateStatusAndPersonnel: builder.mutation({
      query: ({ id, data }) => ({
        url: `/parcels/${id}/delivery-status`,
        method: "PATCH",
        data,
      }),
    }),
    blockParcel: builder.mutation({
      query: (id) => ({
        url: `/parcels/${id}/block-status`,
        method: "PATCH",
      }),
    }),
    adminCreateParcel: builder.mutation({
      query: (data) => ({
        url: "/parcels/create-parcel",
        method: "POST",
        data,
      }),
    }),
    // public
    trackParcel: builder.query<IResponse<IParcelTrackData>, string>({
      query: (trackingId) => ({
        url: `/parcels/tracking/${trackingId}`,
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
  useGetReceiverParcelHistoryQuery,
  useTrackParcelQuery,
  useGetAllParcelsQuery,
  useAdminCreateParcelMutation,
  useGetParcelByIdQuery,
  useUpdateStatusAndPersonnelMutation,
  useBlockParcelMutation,
  useConfirmParcelDeliveryMutation,
} = parcelApi;

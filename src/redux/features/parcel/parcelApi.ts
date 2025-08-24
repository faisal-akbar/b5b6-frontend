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
      providesTags: ["ALL_PARCEL"],
    }),
    getParcelById: builder.query({
      query: (id) => ({
        url: `/parcels/${id}`,
        method: "GET",
      }),
      providesTags: ["ALL_PARCEL"],
    }),
    updateStatusAndPersonnel: builder.mutation({
      query: ({ id, data }) => ({
        url: `/parcels/${id}/delivery-status`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["ALL_PARCEL"],
    }),
    blockParcel: builder.mutation({
      query: ({ id, data }) => ({
        url: `/parcels/${id}/block-status`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["ALL_PARCEL"],
    }),
    adminCreateParcel: builder.mutation({
      query: (data) => ({
        url: "/parcels/create-parcel",
        method: "POST",
        data,
      }),
      invalidatesTags: ["ALL_PARCEL"],
    }),
    // public
    trackParcel: builder.query<IResponse<IParcelTrackData>, string>({
      query: (trackingId) => ({
        url: `/parcels/tracking/${trackingId}`,
        method: "GET",
      }),
      providesTags: ["ALL_PARCEL", "SENDER_PARCEL", "RECEIVER_PARCEL"],
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

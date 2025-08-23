import { baseApi } from "@/redux/api/baseApi";
import {
  IParcelTrackData,
  IResponse,
  ISenderParcel,
  ISenderParcelParams,
} from "@/types";
import { current } from "@reduxjs/toolkit";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Sender
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
    getParcelStatusLog: builder.query({
      query: (id) => ({
        url: `/parcels/${id}/status-log`,
        method: "GET",
      }),
    }),
    getSenderParcels: builder.query<
      IResponse<ISenderParcel[]>,
      ISenderParcelParams
    >({
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
    }),
    // Receiver
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
    confirmParcelDelivery: builder.mutation({
      query: (id) => ({
        url: `/parcels/confirm/${id}`,
        method: "POST",
      }),
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
  useGetReceiverHistoryQuery,
  useTrackParcelQuery,
  useGetAllParcelsQuery,
  useAdminCreateParcelMutation,
  useGetParcelByIdQuery,
  useUpdateStatusAndPersonnelMutation,
  useBlockParcelMutation,
} = parcelApi;

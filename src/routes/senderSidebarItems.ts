import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const CreateParcel = lazy(() => import("@/pages/sender/CreateParcel"));
const CancelParcel = lazy(() => import("@/pages/sender/CancelParcel"));
const DeleteParcel = lazy(() => import("@/pages/sender/DeleteParcel"));
const MyParcels = lazy(() => import("@/pages/sender/MyParcels"));
const ParcelStatus = lazy(() => import("@/pages/sender/ParcelStatus"));

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Parcels",
    items: [
      {
        title: "Send Parcel",
        url: "/parcels",
        component: CreateParcel,
      },
      {
        title: "Cancel Parcel",
        url: "/parcels/cancel/:id",
        component: CancelParcel,
      },
      {
        title: "Delete Parcel",
        url: "/parcels/delete/:id",
        component: DeleteParcel,
      },
      {
        title: "Parcel Status",
        url: "/parcels/:id/status-log",
        component: ParcelStatus,
      },
      {
        title: "My Parcels",
        url: "/parcels/me",
        component: MyParcels,
      },
    ],
  },
];

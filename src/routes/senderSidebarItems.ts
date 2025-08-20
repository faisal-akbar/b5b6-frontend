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
        url: "",
        component: CreateParcel,
      },
      {
        title: "Cancel Parcel",
        url: "cancel/:id",
        component: CancelParcel,
      },
      {
        title: "Delete Parcel",
        url: "delete/:id",
        component: DeleteParcel,
      },
      {
        title: "Parcel Status",
        url: ":id/status-log",
        component: ParcelStatus,
      },
      {
        title: "My Parcels",
        url: "me",
        component: MyParcels,
      },
    ],
  },
];

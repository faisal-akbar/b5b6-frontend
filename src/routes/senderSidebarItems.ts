import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const CreateParcel = lazy(() => import("@/pages/sender/CreateParcel"));
const MyParcels = lazy(() => import("@/pages/sender/MyParcels"));
const ParcelStatus = lazy(() => import("@/pages/sender/ParcelStatus"));

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Parcels",
    items: [
      {
        title: "My Parcels",
        url: "me",
        component: MyParcels,
      },
      // {
      //   title: "Status",
      //   url: ":id/status-log",
      //   component: ParcelStatus,
      // },
    ],
  },
];

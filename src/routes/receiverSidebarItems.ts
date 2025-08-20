import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const IncomingParcels = lazy(() => import("@/pages/receiver/IncomingParcels"));
const DeliveryHistory = lazy(() => import("@/pages/receiver/DeliveryHistory"));
const ConfirmDelivery = lazy(() => import("@/pages/receiver/ConfirmDelivery"));

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "Parcels",
    items: [
      {
        title: "Incoming Parcels",
        url: "me/incoming",
        component: IncomingParcels,
      },
      {
        title: "Delivery History",
        url: "me/history",
        component: DeliveryHistory,
      },
      {
        title: "Confirm Delivery",
        url: "confirm/:id",
        component: ConfirmDelivery,
      },
    ],
  },
];

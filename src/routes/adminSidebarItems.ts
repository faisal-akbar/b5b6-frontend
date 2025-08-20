import AddTour from "@/pages/Admin/AddTour";
import AddTourType from "@/pages/Admin/AddTourType";
// import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  // {
  //   title: "Dashboard",
  //   items: [
  //     {
  //       title: "Users",
  //       url: "/admin/all-users",
  //       component: Analytics,
  //     },
  //   ],
  // },
  {
    title: "Users",
    items: [
      {
        title: "View All Users",
        url: "/admin/all-users",
        component: AddTourType,
      },
      {
        title: "Block User",
        url: "/admin/block-user",
        component: AddTour,
      },
      {
        title: "Habi Jabi",
        url: "/admin/habijabi",
        component: AddTour,
      },
    ],
  },
  {
    title: "Parcels",
    items: [
      {
        title: "View All Parcels",
        url: "/admin/parcels",
        component: ViewParcel,
      },
      {
        title: "Create Parcel",
        url: "/admin/create-parcel",
        component: CreateParcel,
      },
      {
        title: "Update Delivery Status",
        url: "/admin/update-delivery-status",
        component: UpdateDeliveryStatus,
      },
      {
        title: "Update Block Status",
        url: "/admin/update-block-status",
        component: UpdateBlockStatus,
      },
      {
        title: "Parcel Details",
        url: "/admin/parcel-details",
        component: ParcelDetails,
      },
    ],
  },
];

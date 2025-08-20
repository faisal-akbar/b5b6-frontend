// import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AllUsers = lazy(() => import("@/pages/admin/AllUsers"));
const BlockUser = lazy(() => import("@/pages/admin/BlockUser"));

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
        component: AllUsers,
      },
      {
        title: "Block User",
        url: "/admin/block-user",
        component: BlockUser,
      },
      {
        title: "Create Admin",
        url: "/admin/create-admin",
        component: CreateAdmin,
      },
      {
        title: "Create Delivery Personnel",
        url: "/admin/create-delivery-personnel",
        component: CreateDeliveryPersonnel,
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

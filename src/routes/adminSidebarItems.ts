// import Analytics from "@/pages/Admin/Analytics";

import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/admin/analytics/Analytics"));
const AllUsers = lazy(() => import("@/pages/admin/user/AllUsers"));
const BlockUser = lazy(() => import("@/pages/admin/user/BlockUser"));
const CreateDeliveryPersonnel = lazy(
  () => import("@/pages/admin/user/CreateDeliveryPersonnel")
);
const CreateAdmin = lazy(() => import("@/pages/admin/user/CreateAdmin"));
const ViewParcels = lazy(() => import("@/pages/admin/parcels/ViewParcels"));
const ViewParcel = lazy(() => import("@/pages/admin/parcels/ViewParcel"));
const UpdateDeliveryStatus = lazy(
  () => import("@/pages/admin/parcels/UpdateDeliveryStatus")
);
const BlockParcel = lazy(() => import("@/pages/admin/parcels/BlockParcel"));
const CreateParcel = lazy(() => import("@/pages/admin/parcels/CreateParcel"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Analytics",
    items: [
      {
        title: "Parcels Statistics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "User Statistics",
        url: "/admin/user-statistics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Users",
    items: [
      {
        title: "View All Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
      {
        title: "View User",
        url: "/admin/user/:id",
        component: AllUsers,
      },
      {
        title: "Block User",
        url: "/admin/block-user",
        component: BlockUser,
      },
      {
        title: "Create Delivery Personnel",
        url: "/admin/create-delivery-personnel",
        component: CreateDeliveryPersonnel,
      },
      {
        title: "Create Admin",
        url: "/admin/create-admin",
        component: CreateAdmin,
      },
    ],
  },
  {
    title: "Parcels",
    items: [
      {
        title: "View All Parcels",
        url: "/admin/parcels",
        component: ViewParcels,
      },
      {
        title: "View Parcel",
        url: "/admin/parcels/:id",
        component: ViewParcel,
      },
      {
        title: "Update Delivery Status",
        url: "/admin/parcels/:id/delivery-status",
        component: UpdateDeliveryStatus,
      },
      {
        title: "Block Parcel",
        url: "/admin/parcels/:id/block-status",
        component: BlockParcel,
      },
      {
        title: "Create Parcel",
        url: "/admin/parcels/create-parcel",
        component: CreateParcel,
      },
    ],
  },
];

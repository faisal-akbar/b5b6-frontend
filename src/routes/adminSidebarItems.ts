// import Analytics from "@/pages/Admin/Analytics";

import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/admin/analytics/Analytics"));
const AllUsers = lazy(() => import("@/pages/admin/user/AllUsers"));

const ViewParcels = lazy(() => import("@/pages/admin/parcels/ViewParcels"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Parcels",
    items: [
      {
        title: "Parcels Statistics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "Manage Parcels",
        url: "/admin/parcels",
        component: ViewParcels,
      },
    ],
  },
  {
    title: "Users",
    items: [
      {
        title: "Manage Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
    ],
  },
];

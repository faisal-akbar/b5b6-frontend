// import Analytics from "@/pages/Admin/Analytics";

import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/admin/analytics/Analytics"));
const AllUsers = lazy(() => import("@/pages/admin/user/AllUsers"));

const ViewParcels = lazy(() => import("@/pages/admin/parcels/ViewParcels"));

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
    ],
  },
];

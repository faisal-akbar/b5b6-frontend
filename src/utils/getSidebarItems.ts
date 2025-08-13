import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";
import { Role } from "@/types/user.type";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case Role.SUPER_ADMIN:
      return [...adminSidebarItems];
    case Role.ADMIN:
      return [...adminSidebarItems];
    case Role.SENDER:
      return [...userSidebarItems];

    case Role.RECEIVER:
      return [...userSidebarItems];

    case Role.DELIVERY_PERSONNEL:
      return [...userSidebarItems];
    default:
      return [];
  }
};

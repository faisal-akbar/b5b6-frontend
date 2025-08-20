import Bookings from "@/pages/User/Bookings";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Parcels",
    items: [
      {
        title: "Create Parcel",
        url: "/user/create-parcel",
        component: CreateParcel,
      },
      {
        title: "Cancel Parcel",
        url: "/user/cancel-parcel",
        component: CancelParcel,
      },
      {
        title: "Delete Parcel",
        url: "/user/delete-parcel",
        component: DeleteParcel,
      },
      {
        title: "My Parcels",
        url: "/user/my-parcels",
        component: MyParcels,
      },
      {
        title: "Parcel History",
        url: "/user/parcel-history",
        component: ParcelHistory,
      },
      {
        title: "Bookings",
        url: "/user/bookings",
        component: Bookings,
      },
    ],
  },
];

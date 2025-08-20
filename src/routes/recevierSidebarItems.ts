import { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "Parcels",
    items: [
      {
        title: "Incoming Parcels",
        url: "/user/incoming-parcels",
        component: IncomingParcels,
      },
      {
        title: "Confirm Delivery",
        url: "/user/confirm-delivery",
        component: ConfirmDelivery,
      },
      {
        title: "Delivery History",
        url: "/user/delivery-history",
        component: DeliveryHistory,
      },
    ],
  },
];

export interface IParcelTrackData {
  trackingId: string;
  currentStatus: string;
  estimatedDelivery: string;
  deliveredAt: string;
  statusLog: IStatusLog[];
  pickupAddress: string;
  deliveryAddress: string;
}

export interface IStatusLog {
  status: string;
  location: string;
  note: string;
  updatedBy?: string;
  updatedAt: string;
}

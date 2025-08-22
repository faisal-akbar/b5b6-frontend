import type { ComponentType } from "react";
import type { Role } from "./user.type";

export type { ILogin, ISendOtp, IVerifyOtp } from "./auth.type";
export type {
  ParcelTrackData,
  ParcelTrackResponse,
  StatusLog,
} from "./parcel.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = keyof typeof Role;

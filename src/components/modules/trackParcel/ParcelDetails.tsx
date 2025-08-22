import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IParcelTrackResponse } from "@/types/parcel.type";
import { Package } from "lucide-react";
import TimeLine from "./TimeLine";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "In-Transit":
      return "bg-blue-100 text-blue-800";
    case "Dispatched":
      return "bg-purple-100 text-purple-800";
    case "Picked":
      return "bg-orange-100 text-orange-800";
    case "Approved":
      return "bg-yellow-100 text-yellow-800";
    case "Requested":
      return "bg-gray-100 text-gray-800";
    case "Rescheduled":
      return "bg-indigo-100 text-indigo-800";
    case "Returned":
      return "bg-red-100 text-red-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    case "Blocked":
      return "bg-red-100 text-red-800";
    case "Flagged":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const ParcelDetails = ({ data }: { data: IParcelTrackResponse }) => {
  const {
    trackingId,
    currentStatus,
    estimatedDelivery,
    deliveredAt,
    pickupAddress,
    deliveryAddress,
    statusLog,
  } = data.data || {};

  return (
    <section className="py-20 relative" id="parcel-details">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/30"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Parcel Details
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Tracking Information
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Parcel Info Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-6 h-6 text-primary" />
                  Parcel Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Tracking ID</p>
                  <p className="font-mono font-bold text-lg">{trackingId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge className={getStatusColor(currentStatus)}>
                    {currentStatus}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Estimated Delivery
                  </p>
                  <p className="font-semibold">
                    {new Date(estimatedDelivery).toLocaleDateString()}
                  </p>
                </div>
                {deliveredAt && (
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Delivered At
                    </p>
                    <p className="font-semibold">
                      {new Date(deliveredAt).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-card to-card/50 mt-6">
              <CardHeader>
                <CardTitle>Address Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Pickup Address
                  </p>
                  <p className="font-semibold">{pickupAddress}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Delivery Address
                  </p>
                  <p className="font-semibold">{deliveryAddress}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <TimeLine statusLog={statusLog} />
        </div>
      </div>
    </section>
  );
};

export default ParcelDetails;

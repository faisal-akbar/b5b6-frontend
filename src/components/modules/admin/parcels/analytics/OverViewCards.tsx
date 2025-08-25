import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BoxIcon, CheckCircle, Clock, Truck } from "lucide-react";

function OverviewCards({ data }) {
  // Extract counts from your API data
  const total = data?.totalParcel;
  console.log("Total Parcels:", total);
  const delivered =
    data?.totalParcelByStatus.find((s) => s._id === "Delivered")?.count || 0;
  const inTransit =
    data?.totalParcelByStatus.find((s) => s._id === "In-Transit")?.count || 0;
  const requested =
    data?.totalParcelByStatus.find((s) => s._id === "Requested")?.count || 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Parcels</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {total}
          </CardTitle>
          <CardAction>
            <BoxIcon />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Number of total parcels in the system{" "}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Delivered</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {delivered}
          </CardTitle>
          <CardAction>
            <CheckCircle />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Number of parcels delivered{" "}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>In-Transit</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {inTransit}
          </CardTitle>
          <CardAction>
            <Truck />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Number of parcels in transit
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Requested</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {requested}
          </CardTitle>
          <CardAction>
            <Clock />
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Number of parcels requested
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default OverviewCards;

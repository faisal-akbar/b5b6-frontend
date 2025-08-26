import OverviewCards from "@/components/modules/admin/parcels/analytics/OverViewCards";
import ParcelCharts from "@/components/modules/admin/parcels/analytics/ParcelsCharts";
import { useGetParcelAnalyticsQuery } from "@/redux/features/parcel/parcelApi";
import { Loader2 } from "lucide-react";

function Analytics() {
  const { data, isLoading, isError } = useGetParcelAnalyticsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="text-destructive text-lg font-medium">
            Error loading analytics
          </div>
          <p className="text-muted-foreground">
            Unable to load parcel statistics. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  console.log("Parcel Statistics:", isLoading, isError, data);

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground">
          Comprehensive overview of parcel delivery statistics and insights
        </p>
      </div>

      <OverviewCards data={data.data} />
      <ParcelCharts data={data.data} />
    </div>
  );
}

export default Analytics;

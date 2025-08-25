import OverviewCards from "@/components/modules/admin/parcels/analytics/OverViewCards";
import ParcelCharts from "@/components/modules/admin/parcels/analytics/ParcelsCharts";
import { useGetParcelAnalyticsQuery } from "@/redux/features/parcel/parcelApi";

function Analytics() {
  const { data, isLoading, isError } = useGetParcelAnalyticsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading parcel statistics</div>;
  }

  console.log("Parcel Statistics:", isLoading, isError, data);
  return (
    <div className="flex flex-col gap-3">
      <OverviewCards data={data.data} />
      <ParcelCharts data={data.data} />
    </div>
  );
}

export default Analytics;

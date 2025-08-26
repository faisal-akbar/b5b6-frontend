import DeliveryStatusBarChart from "./DeliveryStatysBarChart";
import ShipmentBarChart from "./ShipmentBarChart";
import ShippingTypeChart from "./ShippingTypeChart";
import TypePieChart from "./TypePieChart";

interface AnalyticsData {
  totalParcel?: number;
  totalParcelByStatus?: Array<{
    _id: string;
    count: number;
  }>;
  parcelCreatedInLast7Days?: number;
  parcelCreatedInLast30Days?: number;
  parcelPerType?: Array<{
    _id: string;
    count: number;
  }>;
  parcelPerShippingType?: Array<{
    _id: string;
    count: number;
  }>;
}

interface ParcelChartsProps {
  data?: AnalyticsData;
}

function ParcelCharts({ data }: ParcelChartsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <DeliveryStatusBarChart data={data} />
      {/* Bar Chart: shipment */}
      <ShipmentBarChart data={data} />
      {/* Pie Chart: Parcel Type */}
      <TypePieChart data={data} />
      {/* Pie Chart: Shipping Type */}
      <ShippingTypeChart data={data} />
    </div>
  );
}

export default ParcelCharts;

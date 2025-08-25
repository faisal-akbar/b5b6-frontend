import DeliveryStatusBarChart from "./DeliveryStatysBarChart";
import ShipmentBarChart from "./ShipmentBarChart";
import ShippingTypeChart from "./ShippingTypeChart";
import TypePieChart from "./TypePieChart";

function ParcelCharts({ data }) {
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

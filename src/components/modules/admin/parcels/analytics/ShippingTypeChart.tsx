import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

export const description = "A pie chart with a label";
const chartConfig = {
  count: {
    label: "Count",
  },
  standard: {
    label: "Standard",
    color: "var(--chart-1)",
  },
  express: {
    label: "Express",
    color: "var(--chart-2)",
  },
  same_day: {
    label: "Same Day",
    color: "var(--chart-3)",
  },
  overnight: {
    label: "Overnight",
    color: "var(--chart-4)",
  },
};
function ShippingTypeChart({ data }) {
  const chartData = [
    {
      _id: "standard",
      count:
        data?.parcelPerShippingType?.find((item) => item._id === "standard")
          ?.count || 0,
      fill: "var(--color-standard)",
    },
    {
      _id: "express",
      count:
        data?.parcelPerShippingType?.find((item) => item._id === "express")
          ?.count || 0,
      fill: "var(--color-express)",
    },
    {
      _id: "same_day",
      count:
        data?.parcelPerShippingType?.find((item) => item._id === "same_day")
          ?.count || 0,
      fill: "var(--color-same_day)",
    },
    {
      _id: "overnight",
      count:
        data?.parcelPerShippingType?.find((item) => item._id === "overnight")
          ?.count || 0,
      fill: "var(--color-overnight)",
    },
  ];
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Shipping Type</CardTitle>
        <CardDescription>
          How many different shipping types of orders received?
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="count" label nameKey="_id"></Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ShippingTypeChart;

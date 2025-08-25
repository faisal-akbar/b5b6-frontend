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
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const chartConfig = {
  created: {
    label: "Created",
    color: "#10b981",
  },
};

function ShipmentBarChart({ data }) {
  const chartData = [
    {
      days: "Last 7 Days",
      created: data?.parcelCreatedInLast7Days,
    },
    {
      days: "Last 30 Days",
      created: data?.parcelCreatedInLast30Days,
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Shipment Order</CardTitle>
        <CardDescription>
          How many Parcel Shipments were created in the last 7 days vs last 30
          days?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="days"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Bar dataKey="created" fill="var(--color-created)" radius={5}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ShipmentBarChart;

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
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
export const description = "A mixed bar chart";

const STATUS_COLORS = {
  Delivered: "#22c55e", // green-500
  "In-Transit": "#2563eb", // blue-600
  Dispatched: "#a21caf", // purple-800
  Picked: "#f59e42", // orange-400
  Approved: "#eab308", // yellow-500
  Requested: "#6b7280", // gray-500
  Rescheduled: "#6366f1", // indigo-500
  Returned: "#ef4444", // red-500
  Cancelled: "#ef4444", // red-500
  Blocked: "#ef4444", // red-500
  Flagged: "#eab308", // yellow-500
  default: "#6b7280", // gray-500
};

const chartConfig = {
  count: {
    label: "Count",
    color: "var(--chart-5)",
  },
};
export default function DeliveryStatusBarChart({ data }) {
  const chartData = [
    {
      _id: "Requested",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Requested")
          ?.count || 0,
    },
    {
      _id: "Approved",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Approved")
          ?.count || 0,
    },
    {
      _id: "Picked",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Picked")
          ?.count || 0,
    },
    {
      _id: "Dispatched",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Dispatched")
          ?.count || 0,
    },
    {
      _id: "In-Transit",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "In-Transit")
          ?.count || 0,
    },
    {
      _id: "Rescheduled",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Rescheduled")
          ?.count || 0,
    },
    {
      _id: "Delivered",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Delivered")
          ?.count || 0,
    },
    {
      _id: "Returned",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Returned")
          ?.count || 0,
    },
    {
      _id: "Cancelled",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Cancelled")
          ?.count || 0,
    },
    {
      _id: "Blocked",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Blocked")
          ?.count || 0,
    },
    {
      _id: "Flagged",
      count:
        data?.totalParcelByStatus?.find((item) => item._id === "Flagged")
          ?.count || 0,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Distribution</CardTitle>
        <CardDescription>
          How many Parcel were made in each status?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -22,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis type="number" dataKey="count" hide />
            <YAxis
              dataKey="_id"
              type="category"
              tickLine={false}
              tickMargin={16}
              axisLine={false}
              width={120}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={5}>
              {chartData.map((entry, idx) => (
                <Cell
                  key={entry._id}
                  fill={STATUS_COLORS[entry._id] || STATUS_COLORS.default}
                />
              ))}
              <LabelList
                position="right"
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

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

const chartConfig = {
  count: {
    label: "Count",
  },
  document: {
    label: "Document",
    color: "var(--chart-1)",
  },
  package: {
    label: "Package",
    color: "var(--chart-2)",
  },
  fragile: {
    label: "Fragile",
    color: "var(--chart-3)",
  },
  electronics: {
    label: "Electronics",
    color: "var(--chart-4)",
  },
};
function TypePieChart({ data }) {
  const chartData = [
    {
      _id: "document",
      count:
        data?.parcelPerType?.find((item) => item._id === "document")?.count ||
        0,
      fill: "var(--color-document)",
    },
    {
      _id: "package",
      count:
        data?.parcelPerType?.find((item) => item._id === "package")?.count || 0,
      fill: "var(--color-package)",
    },
    {
      _id: "fragile",
      count:
        data?.parcelPerType?.find((item) => item._id === "fragile")?.count || 0,
      fill: "var(--color-fragile)",
    },
    {
      _id: "electronics",
      count:
        data?.parcelPerType?.find((item) => item._id === "electronics")
          ?.count || 0,
      fill: "var(--color-electronics)",
    },
  ];
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Parcel Type</CardTitle>
        <CardDescription>
          How many different types of Parcel orders received?
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

export default TypePieChart;

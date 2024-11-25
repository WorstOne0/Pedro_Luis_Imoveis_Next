import { Bar, BarChart, Cell } from "recharts";
import { CardTitle, Slider, ChartContainer } from "@/components";
import { ChartConfig } from "@/components/ui/chart";

export default function PriceCard({
  children,
  price,
  onPriceChange,
}: {
  children?: React.ReactNode;
  price: { min: number; max: number };
  onPriceChange: (value: number[]) => void;
}) {
  const chartData = [
    { date: "2024-04-01", desktop: 222, mobile: 0 },
    { date: "2024-04-02", desktop: 97, mobile: 1 },
    { date: "2024-04-03", desktop: 167, mobile: 2 },
    { date: "2024-04-04", desktop: 242, mobile: 3 },
    { date: "2024-04-05", desktop: 373, mobile: 4 },
    { date: "2024-04-06", desktop: 301, mobile: 5 },
    { date: "2024-04-07", desktop: 245, mobile: 6 },
    { date: "2024-04-08", desktop: 409, mobile: 7 },
    { date: "2024-04-09", desktop: 59, mobile: 8 },
    { date: "2024-04-10", desktop: 261, mobile: 9 },
    { date: "2024-04-11", desktop: 327, mobile: 10 },
    { date: "2024-04-12", desktop: 292, mobile: 11 },
    { date: "2024-04-13", desktop: 342, mobile: 12 },
    { date: "2024-04-14", desktop: 137, mobile: 13 },
    { date: "2024-04-15", desktop: 120, mobile: 14 },
    { date: "2024-04-16", desktop: 138, mobile: 15 },
    { date: "2024-04-17", desktop: 446, mobile: 16 },
    { date: "2024-04-18", desktop: 364, mobile: 17 },
    { date: "2024-04-19", desktop: 243, mobile: 18 },
    { date: "2024-04-20", desktop: 89, mobile: 19 },
    { date: "2024-04-21", desktop: 137, mobile: 20 },
    { date: "2024-04-22", desktop: 224, mobile: 25 },
    { date: "2024-04-23", desktop: 138, mobile: 30 },
    { date: "2024-04-24", desktop: 387, mobile: 35 },
    { date: "2024-04-25", desktop: 215, mobile: 40 },
    { date: "2024-04-26", desktop: 75, mobile: 45 },
    { date: "2024-04-27", desktop: 383, mobile: 50 },
    { date: "2024-04-28", desktop: 122, mobile: 55 },
    { date: "2024-04-29", desktop: 315, mobile: 60 },
    { date: "2024-04-30", desktop: 454, mobile: 65 },
    { date: "2024-05-01", desktop: 165, mobile: 70 },
    { date: "2024-05-02", desktop: 293, mobile: 75 },
    { date: "2024-05-03", desktop: 247, mobile: 80 },
    { date: "2024-05-04", desktop: 385, mobile: 85 },
    { date: "2024-05-05", desktop: 481, mobile: 90 },
    { date: "2024-05-06", desktop: 498, mobile: 95 },
    { date: "2024-05-07", desktop: 388, mobile: 100 },
    { date: "2024-05-08", desktop: 149, mobile: 105 },
    { date: "2024-05-09", desktop: 227, mobile: 110 },
    { date: "2024-05-10", desktop: 293, mobile: 115 },
    { date: "2024-05-11", desktop: 335, mobile: 120 },
    { date: "2024-05-12", desktop: 197, mobile: 125 },
    { date: "2024-05-13", desktop: 197, mobile: 130 },
    { date: "2024-05-14", desktop: 448, mobile: 135 },
    { date: "2024-05-15", desktop: 473, mobile: 140 },
    { date: "2024-05-16", desktop: 338, mobile: 145 },
    { date: "2024-05-17", desktop: 499, mobile: 150 },
    { date: "2024-05-18", desktop: 315, mobile: 155 },
    { date: "2024-05-19", desktop: 235, mobile: 160 },
    { date: "2024-05-20", desktop: 177, mobile: 175 },
    { date: "2024-05-21", desktop: 82, mobile: 180 },
    { date: "2024-05-22", desktop: 81, mobile: 195 },
    { date: "2024-05-23", desktop: 252, mobile: 200 },
    { date: "2024-05-24", desktop: 294, mobile: 205 },
    { date: "2024-05-25", desktop: 201, mobile: 210 },
    { date: "2024-05-26", desktop: 213, mobile: 215 },
    { date: "2024-05-27", desktop: 420, mobile: 220 },
    { date: "2024-05-28", desktop: 233, mobile: 230 },
    { date: "2024-05-29", desktop: 78, mobile: 240 },
    { date: "2024-05-30", desktop: 340, mobile: 250 },
    { date: "2024-05-31", desktop: 178, mobile: 260 },
    { date: "2024-06-01", desktop: 178, mobile: 270 },
    { date: "2024-06-02", desktop: 470, mobile: 280 },
    { date: "2024-06-03", desktop: 103, mobile: 290 },
    { date: "2024-06-04", desktop: 439, mobile: 300 },
    { date: "2024-06-05", desktop: 88, mobile: 310 },
    { date: "2024-06-06", desktop: 294, mobile: 315 },
    { date: "2024-06-07", desktop: 323, mobile: 320 },
    { date: "2024-06-08", desktop: 385, mobile: 330 },
    { date: "2024-06-09", desktop: 438, mobile: 340 },
    { date: "2024-06-10", desktop: 155, mobile: 350 },
    { date: "2024-06-11", desktop: 92, mobile: 360 },
    { date: "2024-06-12", desktop: 492, mobile: 370 },
    { date: "2024-06-13", desktop: 81, mobile: 380 },
    { date: "2024-06-14", desktop: 426, mobile: 390 },
    { date: "2024-06-15", desktop: 307, mobile: 400 },
    { date: "2024-06-16", desktop: 371, mobile: 410 },
    { date: "2024-06-17", desktop: 475, mobile: 415 },
    { date: "2024-06-18", desktop: 107, mobile: 420 },
    { date: "2024-06-19", desktop: 341, mobile: 430 },
    { date: "2024-06-20", desktop: 408, mobile: 440 },
    { date: "2024-06-21", desktop: 169, mobile: 450 },
    { date: "2024-06-22", desktop: 317, mobile: 460 },
    { date: "2024-06-23", desktop: 480, mobile: 470 },
    { date: "2024-06-24", desktop: 132, mobile: 480 },
    { date: "2024-06-25", desktop: 141, mobile: 490 },
    { date: "2024-06-26", desktop: 434, mobile: 500 },
    { date: "2024-06-27", desktop: 448, mobile: 550 },
    { date: "2024-06-28", desktop: 149, mobile: 600 },
    { date: "2024-06-29", desktop: 103, mobile: 670 },
    { date: "2024-06-30", desktop: 446, mobile: 700 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  return (
    <div className="h-full w-full flex flex-col justify-between items-center px-[1rem]">
      <CardTitle className="font-bold text-[2.2rem]">Preço</CardTitle>
      <div className="w-full flex justify-center items-center">
        <span className="">{`R$ ${price.min}`}</span>
        <span className="mx-[0.5rem]"> - </span>
        <span>{`R$ ${price.max}`}</span>
      </div>
      <ChartContainer config={chartConfig} className="min-h-0 grow w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.mobile < price.max && entry.mobile > price.min ? "blue" : "grey"} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>

      <div className="w-full py-[1rem]">
        <Slider min={0} max={500} step={5} defaultValue={[10, 20]} onValueChange={onPriceChange} />
      </div>
    </div>
  );
}

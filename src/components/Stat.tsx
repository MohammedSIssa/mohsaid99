import type { Stat } from "../types/Stat";

import { defaults } from "chart.js/auto";
import { Doughnut, Line, Pie } from "react-chartjs-2";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.font.family = "Playpen Sans Arabic";
defaults.plugins.title.display = true;
defaults.plugins.title.align = "end";
defaults.plugins.title.font = {
  size: 20,
  family: "Playpen Sans Arabic",
  weight: "bold",
};
defaults.plugins.title.color = "white";

export default function Charts({ data }: { data: Stat }) {
  return (
    <div className="flex w-full max-w-full flex-col items-center justify-center gap-10 pt-20 pb-30 text-2xl font-bold md:p-10">
      <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:px-5 [&_div]:backdrop-blur-2xl [&_div]:md:min-w-[50%]">
        {data?.doughnut && (
          <div className="flex w-full flex-wrap items-center justify-center gap-5 md:max-w-[600px] [&_div]:border-t-2 [&_div]:border-b-2 [&_div]:border-white/20 [&_div]:bg-white/10 [&_div]:md:rounded-2xl [&_div]:md:border-2">
            <div className="chart h-[600px] w-full p-10">
              <Doughnut
                data={{
                  labels: data.doughnut.data.map((d) => d.label),
                  datasets: [
                    {
                      data: data.doughnut.data.map((d) => d.value),
                      backgroundColor: [
                        "#3b82f6",
                        "#10b981",
                        "#f59e0b",
                        "#ef4444",
                        "#8b5cf6",
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "الروتين اليومي",
                    },
                    legend: {
                      labels: {
                        color: "white",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
        {data?.workout && (
          <div className="flex w-full flex-wrap items-center justify-center gap-5 md:max-w-[600px] [&_div]:border-t-2 [&_div]:border-b-2 [&_div]:border-white/20 [&_div]:bg-white/10 [&_div]:md:rounded-2xl [&_div]:md:border-2">
            <div className="chart h-[600px] w-full p-10">
              <Pie
                data={{
                  labels: data.workout.data.map((d) => d.label),
                  datasets: [
                    {
                      data: data.workout.data.map((d) => d.value),
                      backgroundColor: [
                        "#3b82f6",
                        "#10b981",
                        "#f59e0b",
                        "#ef4444",
                        "#8b5cf6",
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "تمارين الرياضة",
                    },
                    legend: {
                      labels: {
                        color: "white",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
      {data?.line ? (
        <div className="chart h-[600px] w-full border-t-2 border-b-2 border-white/20 bg-white/10 p-5 md:rounded-2xl md:border-2">
          <Line
            data={{
              labels: data.line?.data.map((d) => d.label),
              datasets: [
                {
                  data: data.line?.data.map((d) => d.value),
                  label: "ساعات",

                  borderColor: "rgb(59, 130, 246)",
                  fill: true,
                  backgroundColor: "rgba(59, 130, 246, 0.01)",
                  pointBackgroundColor: "rgb(59, 130, 246)",
                  pointRadius: 4,
                  pointHoverRadius: 6,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: false,
                  min: 0,
                  max: 40,
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "rgba(200,200,200,0.2)",
                  },
                },
                x: {
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "rgba(200,200,200,0.2)",
                  },
                },
                // x: {
                //   offset: true,
                // },
              },
              plugins: {
                title: {
                  text: "وقت التركيز",
                },
                legend: {
                  labels: {
                    color: "white",
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.3,
                },
              },
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

import { stats } from "./stats-data";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { logger } from "../scripts/logger";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.font.family = "Playpen Sans Arabic";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "end";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.font.family = "Playpen Sans Arabic";
defaults.plugins.title.color = "white";

const Stat = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const { user } = useContext(UserContext);

  useEffect(() => {
    setData(stats.find((stat) => stat.count == id));

    async function log() {
      if (import.meta.env.MODE !== "development") {
        await logger(user?.username, `Stats | ${id}`);
      }
    }

    log();
  }, [id, user?.username]);

  // return <pre dir="ltr">{JSON.stringify(data, null, 2)}</pre>;

  return (
    <div className="p-10 flex flex-col items-center justify-center text-2xl font-bold gap-10">
      🛠️ هذه الصفحة قيد الانشاء 🛠️
      {data?.doughnut && (
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <div className="h-[500px] chart p-10 rounded-2xl md:shadow-lg md:shadow-slate-800">
            <Doughnut
              data={{
                labels: data.doughnut.actual.map((d) => d.label),
                datasets: [
                  {
                    data: data.doughnut.actual.map((d) => d.value),
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "الروتين اليومي",
                  },
                },
              }}
            />
          </div>
          <div className="h-[500px] chart p-10 rounded-2xl md:shadow-lg md:shadow-slate-800">
            <Doughnut
              data={{
                labels: data.doughnut.goal.map((d) => d.label),
                datasets: [
                  {
                    data: data.doughnut.goal.map((d) => d.value),
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "الهدف",
                  },
                },
              }}
            />
          </div>
        </div>
      )}
      {data?.line ? (
        <div className="p-5 w-full h-[500px] chart rounded-2xl">
          <Line
            data={{
              labels: data.line.data.map((d) => d.label),
              datasets: [
                {
                  data: data.line.data.map((d) => d.goal),
                  label: "الهدف",
                },
                {
                  data: data.line.data.map((d) => d.actual),
                  label: "الواقع",
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: false,
                  min: 10,
                  max: 30,
                },
                x: {
                  offset: true,
                },
              },
              plugins: {
                title: {
                  text: "وقت التركيز",
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
};

export default Stat;

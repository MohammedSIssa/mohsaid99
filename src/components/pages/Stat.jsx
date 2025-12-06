import { stats } from "./stats-data";
import { useParams } from "react-router-dom";

import { useOutletContext } from "react-router-dom";

import { useState, useEffect } from "react";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut, Line, Pie } from "react-chartjs-2";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { logger } from "../../scripts/logger";

import { useNavigate } from "react-router-dom";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.font.family = "Playpen Sans Arabic";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "end";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.font.family = "Playpen Sans Arabic";
defaults.plugins.title.color = "white";

const Stat = ({ latest = false }) => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const { user } = useContext(UserContext);

  const { latestStory } = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    // setData(stats.find((stat) => stat.count == id));
    if (!latest) setData(stats.find((stat) => stat.count == id));
    if (latest) navigate(`/stats/${latestStory}`);

    async function log() {
      if (
        import.meta.env.MODE !== "development" &&
        user?.username !== "mohsaid99"
      ) {
        await logger(user?.username, `Stats | ${id}`);
      }
    }

    log();
  }, [id, user?.username, latest, latestStory, navigate]);

  return (
    <div className="md:p-10 pt-10 flex flex-col items-center justify-center text-2xl font-bold gap-10 pb-30">
      <div className="flex w-full items-center justify-center flex-col md:flex-row gap-10 px-5 [&_div]:md:min-w-[50%]">
        {data?.doughnut && (
          <div className="w-full md:max-w-[600px] flex flex-wrap gap-5 items-center justify-center">
            <div className="h-[600px] w-full chart p-10 border border-l-0 border-r-0 md:border-l md:border-r md:rounded-2xl">
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
                  },
                }}
              />
            </div>
          </div>
        )}
        {data?.workout && (
          <div className="w-full md:max-w-[600px] flex flex-wrap gap-5 items-center justify-center">
            <div className="h-[600px] w-full chart p-10 border border-l-0 border-r-0 md:border-l md:border-r md:rounded-2xl">
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
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
      {data?.line ? (
        <div className="p-5 w-full h-[600px] chart border border-l-0 border-r-0 md:border-l md:border-r md:rounded-2xl">
          <Line
            data={{
              labels: data.line.data.map((d) => d.label),
              datasets: [
                {
                  data: data.line.data.map((d) => d.value),
                  label: "ساعات",

                  borderColor: "rgb(59, 130, 246)",
                  fill: true,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
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
                },
                // x: {
                //   offset: true,
                // },
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

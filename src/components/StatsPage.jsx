import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.font.family = "Playpen Sans Arabic";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "end";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.font.family = "Playpen Sans Arabic";
defaults.plugins.title.color = "white";

const StatsPage = ({ data }) => {
  return (
    <div className="p-10 flex flex-col items-center justify-center text-2xl font-bold gap-10">
      🛠️ هذه الصفحة قيد الانشاء 🛠️
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
    </div>
  );
};

export default StatsPage;

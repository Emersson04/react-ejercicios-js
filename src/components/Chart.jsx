import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Plantilla } from "./pages/Plantilla";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { LineChart } from "./chart/Linechart";
import { BarChartCom } from "./chart/BarsChart";

export const ChartJsComponente = () => {
  const misoptions = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "rgb(255,99,132)" },
      },
    },
  };

  const misoptionsBar = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 43,
      },
      x: {
        ticks: { color: "rgb(0,220, 195" },
      },
    },
  };

  return (
    <>
      <Plantilla>
        <div>
          <h1 className="bg-info text-center font-monospace fw-bold">
            Graficas chart
          </h1>

          <div className="grid grid-cols-2 gap-4 justify-items-center items-center w-full ">
            <div
              className="bg-light border border-primary"
              style={{ width: "450px", height: "320px" }}
            >
              <LineChart misoptions={misoptions} />
            </div>
            <div
              className="bg-light border border-primary"
              style={{ width: "450px", height: "320px" }}
            >
              <BarChartCom misoptions={misoptionsBar} />
            </div>
            {/* <div
              className="bg-light border border-primary"
              style={{ width: "450px", height: "320px" }}
            ></div>
            <div
              className="bg-light border border-primary"
              style={{ width: "450px", height: "320px" }}
            ></div>
            <div
              className="bg-light border border-primary"
              style={{ width: "450px", height: "320px" }}
            ></div> */}
          </div>
        </div>
      </Plantilla>
    </>
  );
};

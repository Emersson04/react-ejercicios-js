import { Plantilla } from "../components/pages/Plantilla";

import { BarChartCom } from "../components/chart/BarsChart";

export const BarChartPage = () => {
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
        <BarChartCom misoptions={misoptionsBar} />
      </Plantilla>
    </>
  );
};

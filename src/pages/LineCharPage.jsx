import { Plantilla } from "../components/pages/Plantilla";

import { LineChart } from "../components/chart/Linechart";

export const LineChartPage = () => {
  const misoptions = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "rgb(1,33,132)" },
      },
    },
  };

  return (
    <>
      <Plantilla>
        <LineChart misoptions={misoptions} />
      </Plantilla>
    </>
  );
};

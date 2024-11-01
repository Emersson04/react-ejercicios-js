import { Line } from "react-chartjs-2";

export const LineChart = ({ misoptions }) => {
  const meses = ["hola", "hola", "hola", "hola", "este", "este", "este", "este", "este", "este", "este", "este"];

  const miData = {
    labels: meses,
    datasets: [
      {
        label: "beneficios",
        data: [20, 80,1, 67, 3,8, 44, 43,43, 21,89, 11],
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255,99,132)",
        pointBackgroundColor: "rgba(255,99,132)",
      },
      {
        label: "otra linea",
        data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
        fill: true,
        borderColor: "rgb(90,99,132)",
        backgroundColor: "rgba(90,99,132,0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255,99,132)",
        pointBackgroundColor: "rgba(255,99,132)",
      },
    ],
  };

  return <Line data={miData} options={misoptions} />;
};

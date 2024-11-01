import { Bar } from "react-chartjs-2";

export const BarChartCom = ({ misoptions }) => {
  const meses = ["hola", "hola", "hola", "hola"];

  

  const midata = {
    labels: meses,
    datasets: [
      {
        label: "beneficios",
        data: [2, 12, 32, 43, 42, 32134, 432, 23],
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255,99,132)",
        pointBackgroundColor: "rgba(255,99,132)",
      },
      {
        label: "otra cosa",
        data: [32, 32, 32, 43, 2, 121],
      },
    ],
  };

  return (
    <>
      <Bar data={midata} options={misoptions} />
    </>
  );
};

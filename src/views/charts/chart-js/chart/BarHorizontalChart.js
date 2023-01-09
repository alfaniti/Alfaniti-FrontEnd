import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BarHorizontalChart = () => {
  const options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    responsive: true
  };

  const labels = [0, 1, 2, 3];

  const data = {
    labels,
    datasets: [
      {
        label: 'Data 1',
        data: [25, 45, 74, 85],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(64, 153, 255, 1)'
      },
      {
        label: 'Data 2',
        data: [30, 52, 65, 65],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(255, 83, 112, 1)'
      }
    ]
  };

  return <Bar data={data} options={options} height={300} />;
};

export default BarHorizontalChart;

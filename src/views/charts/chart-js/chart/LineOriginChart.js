import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
const LineOriginChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };

  const labels = [0, 1, 2, 3, 4, 5, 6];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'D1',
        borderWidth: 4,
        data: [85, 55, 70, 50, 75, 45, 60],
        cubicInterpolationMode: 'monotone',
        borderColor: 'rgba(64, 153, 255, 1)',
        backgroundColor: 'rgba(64, 153, 255, 1)',
        hoverborderColor: 'rgba(64, 153, 255, 1)',
        hoverBackgroundColor: 'rgba(64, 153, 255, 1)'
      }
    ]
  };

  return <Line data={data} height={300} options={options} />;
};

export default LineOriginChart;

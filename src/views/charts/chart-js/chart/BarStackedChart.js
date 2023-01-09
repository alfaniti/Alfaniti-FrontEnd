import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarStackedChart = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    barValueSpacing: 20,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  const labels = [0, 1, 2, 3];

  const data = {
    labels,
    datasets: [
      {
        label: 'Data 1',
        data: [25, 45, 74, 85],
        backgroundColor: 'rgba(64, 153, 255, 1)'
      },
      {
        label: 'Data 2',
        data: [30, 52, 65, 65],
        backgroundColor: 'rgba(255, 182, 77, 1)'
      }
    ]
  };

  return <Bar data={data} options={options} height={300} />;
};

export default BarStackedChart;

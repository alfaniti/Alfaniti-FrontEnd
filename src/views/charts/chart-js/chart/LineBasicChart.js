import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const LineBasicChart = () => {
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
        borderColor: 'transparent',
        borderWidth: 4,
        data: [83, 45, 60, 45, 45, 55, 45],
        cubicInterpolationMode: 'monotone',
        backgroundColor: 'rgba(64, 153, 255, 1)',
        hoverborderColor: 'rgba(64, 153, 255, 1)',
        hoverBackgroundColor: 'rgba(64, 153, 255, 1)'
      },
      {
        fill: true,
        label: 'D2',
        borderColor: 'transparent',
        borderWidth: 0,
        cubicInterpolationMode: 'monotone',
        data: [45, 60, 45, 80, 60, 80, 45],
        backgroundColor: 'rgba(14, 158, 74, 1)',
        hoverborderColor: 'rgba(14, 158, 74, 1)',
        hoverBackgroundColor: 'rgba(14, 158, 74, 1)'
      },
      {
        fill: true,
        label: 'D3',
        borderColor: 'transparent',
        borderWidth: 4,
        cubicInterpolationMode: 'monotone',
        data: [45, 80, 45, 45, 60, 45, 80],
        backgroundColor: 'rgba(46, 216, 182, 1)',
        hoverborderColor: 'rgba(46, 216, 182, 1)',
        hoverBackgroundColor: 'rgba(46, 216, 182, 1)'
      }
    ]
  };

  return <Line data={data} height={300} options={options} />;
};

export default LineBasicChart;

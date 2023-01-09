import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
const LineInterpolationChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  };

  const labels = [0, 1, 2, 3, 4, 5, 6];

  const data = {
    labels,
    datasets: [
      {
        fill: false,
        label: 'D1',
        borderWidth: 4,
        borderDash: [15, 10],
        data: [55, 70, 62, 81, 56, 70, 90],
        cubicInterpolationMode: 'monotone',
        borderColor: 'rgba(14, 158, 74, 1)',
        backgroundColor: 'rgba(14, 158, 74, 1)',
        hoverborderColor: 'rgba(14, 158, 74, 1)',
        hoverBackgroundColor: 'rgba(14, 158, 74, 1)'
      },
      {
        fill: true,
        label: 'D2',
        borderWidth: 0,
        cubicInterpolationMode: 'monotone',
        data: [85, 55, 70, 50, 75, 45, 60],
        borderColor: 'rgba(64, 153, 255, 1)',
        backgroundColor: 'rgba(64, 153, 255, 1)',
        hoverborderColor: 'rgba(64, 153, 255, 1)',
        hoverBackgroundColor: 'rgba(64, 153, 255, 1)'
      },
      {
        fill: false,
        label: 'D3',
        borderWidth: 4,
        cubicInterpolationMode: 'monotone',
        data: [50, 75, 80, 70, 85, 80, 70],
        borderColor: 'rgba(46, 216, 182, 1)',
        backgroundColor: 'rgba(46, 216, 182, 1)',
        hoverborderColor: 'rgba(46, 216, 182, 1)',
        hoverBackgroundColor: 'rgba(46, 216, 182, 1)'
      }
    ]
  };

  return <Line data={data} responsive={true} height={300} options={options} />;
};

export default LineInterpolationChart;

import React from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
const RadarAreaChart1 = () => {
  const options = {
    barValueSpacing: 20,
    maintainAspectRatio: false,
    responsive: true
  };

  const data = {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: 'D1',
        data: [60, 60, 45, 80, 60, 80, 45],
        fill: true,
        borderWidth: 4,
        borderColor: 'transparent',
        backgroundColor: 'rgba(64, 153, 255, 1)',
        hoverborderColor: 'rgba(64, 153, 255, 1)',
        hoverBackgroundColor: 'rgba(64, 153, 255, 1)'
      },
      {
        label: 'D2',
        data: [40, 80, 40, 65, 60, 50, 95],
        fill: true,
        borderWidth: 0,
        borderColor: 'rgba(14, 158, 74, 1)',
        backgroundColor: 'rgba(14, 158, 74, 1)',
        hoverborderColor: 'rgba(14, 158, 74, 1)',
        hoverBackgroundColor: 'rgba(14, 158, 74, 1)'
      },
      {
        label: 'D3',
        data: [20, 40, 80, 60, 85, 60, 20],
        fill: true,
        borderWidth: 4,
        borderColor: 'transparent',
        backgroundColor: 'rgba(46, 216, 182, 1)',
        hoverborderColor: 'rgba(46, 216, 182, 1)',
        hoverBackgroundColor: 'rgba(46, 216, 182, 1)'
      }
    ]
  };

  return <Radar data={data} height={300} options={options} />;
};

export default RadarAreaChart1;

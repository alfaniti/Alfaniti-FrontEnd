import React from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
const RadarAreaChart3 = () => {
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
        borderColor: 'rgba(64, 153, 255, 1)',
        backgroundColor: 'transparent',
        hoverborderColor: 'rgba(64, 153, 255, 1)',
        hoverBackgroundColor: 'transparent'
      },
      {
        label: 'D2',
        data: [40, 80, 40, 65, 60, 50, 95],
        fill: true,
        borderWidth: 4,
        borderColor: 'rgba(14, 158, 74, 1)',
        backgroundColor: 'transparent',
        hoverborderColor: 'rgba(14, 158, 74, 1)',
        hoverBackgroundColor: 'transparent'
      },
      {
        label: 'D3',
        data: [20, 40, 80, 60, 85, 60, 20],
        fill: true,
        borderWidth: 4,
        borderColor: 'rgba(46, 216, 182, 1)',
        backgroundColor: 'transparent',
        hoverborderColor: 'rgba(46, 216, 182, 1)',
        hoverBackgroundColor: 'transparent'
      }
    ]
  };

  return <Radar data={data} height={300} options={options} />;
};

export default RadarAreaChart3;

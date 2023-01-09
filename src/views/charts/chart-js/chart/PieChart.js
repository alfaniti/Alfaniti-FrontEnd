import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true
  };

  const data = {
    labels: ['Data 1', 'Data 2', 'Data 3'],
    datasets: [
      {
        label: '# of Votes',
        data: [30, 30, 40],
        backgroundColor: ['rgba(46, 216, 182, 1)', 'rgba(14, 158, 74, 1)', 'rgba(64, 153, 255, 1)'],
        borderColor: ['rgba(255, 255, 255, 1)'],
        borderWidth: 2
      }
    ]
  };

  return <Pie data={data} responsive={true} height={300} options={options} />;
};

export default PieChart;

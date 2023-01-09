import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
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
        backgroundColor: ['rgba(46, 216, 182, 1)', 'rgba(255, 182, 77, 1)', 'rgba(255, 83, 112, 1)'],
        borderColor: ['rgba(255, 255, 255, 1)'],
        borderWidth: 2
      }
    ]
  };

  return <Doughnut data={data} height={300} options={options} />;
};

export default DoughnutChart;

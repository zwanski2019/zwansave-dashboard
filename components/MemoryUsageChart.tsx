/*
Memory
Usage
Chart
*/
'use client';
import { Line } from 'react-chartjs-2';

const MemoryUsageChart = () => {
  const data = {
    labels: ['1s', '2s', '3s', '4s', '5s'],
    datasets: [
      {
        label: 'Memory Usage (MB)',
        data: [100, 150, 130, 170, 160],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} />;
};

export default MemoryUsageChart;

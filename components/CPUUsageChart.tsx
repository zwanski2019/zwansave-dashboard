/*
CPU
Usage
Chart
*/
'use client';
import { Bar } from 'react-chartjs-2';

const CPUUsageChart = () => {
  const data = {
    labels: ['Core 1', 'Core 2', 'Core 3', 'Core 4'],
    datasets: [
      {
        label: 'CPU Usage (%)',
        data: [60, 50, 75, 65],
        backgroundColor: 'rgba(153,102,255,0.6)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default CPUUsageChart;

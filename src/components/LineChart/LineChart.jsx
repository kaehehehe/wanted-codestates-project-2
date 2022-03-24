import React from 'react';
import Chart from 'chart.js/auto';

import { Line } from 'react-chartjs-2';

const LineChart = ({ rankData }) => {
  const data = {
    labels: [...Array(rankData.length)].map((_, i) => i + 1),
    datasets: [
      {
        label: '순위변동 추이',
        data: rankData,
        backgroundColor: '#0177FF',
        borderColor: '#0177FF',
      },
    ],
  };
  return (
      <Line
        data={data}
        options={{
          scales: {
            y: {
              min: 1,
              max: 8,
              reverse: true,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
  );
};

export default LineChart;

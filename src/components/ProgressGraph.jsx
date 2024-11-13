import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ProgressGraph = () => {
  const data = [
    { name: 'Linked List', progress: 70 },
    { name: 'Stacks', progress: 60 },
    { name: 'Queues', progress: 50 },
    { name: 'Trees', progress: 80 },
    { name: 'Hash', progress: 40 },
    { name: 'Heap', progress: 30 },
    { name: 'Graphs', progress: 55 },
    { name: 'Arrays', progress: 90 },
  ];

  return (
    <div className="flex flex-col items-center py-20 text-white bg-gray-800 h-screen">
      <h2 className="text-3xl font-bold mb-10">Progress Graph</h2>
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#ffffff" />
        <YAxis stroke="#ffffff" />
        <Tooltip />
        <Bar dataKey="progress" fill="#1484da" />
      </BarChart>
    </div>
  );
};

export default ProgressGraph;

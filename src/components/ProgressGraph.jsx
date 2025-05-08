import React from 'react';

const ProgressGraph = () => {
  const data = [
    { name: 'Linked List', progress: 70 },
    { name: 'Stacks', progress: 50 },
    { name: 'Queues', progress: 50 },
    { name: 'Trees', progress: 20 },
    { name: 'Hash', progress: 40 },
    { name: 'Heap', progress: 30 },
    { name: 'Graphs', progress: 55 },
    { name: 'Arrays', progress: 90 },
    { name: 'Searching & Sorting', progress: 60 },
    { name: 'Greedy Algorithms', progress: 45 },
    { name: 'Dynamic Programming', progress: 35 },
    { name: 'NP-Hard & NP-Complete', progress: 25 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white py-10 px-4">
      <h2 className="text-3xl font-bold mb-10">Progress Graph</h2>
      <div className="w-full max-w-4xl space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{item.name}</span>
              <span>{item.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressGraph;

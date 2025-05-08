import React, { useEffect, useRef } from 'react';

const CPUScheduler = () => {
  const ganttRef = useRef(null);
  const resultsRef = useRef(null);

  const simulate = () => {
    const burst = parseInput("burstTimes");
    const arrival = parseInput("arrivalTimes", burst.length, 0);
    const priorities = parseInput("priorities", burst.length, 1);
    const quantum = parseInt(document.getElementById("quantum").value);
    const algo = document.getElementById("algorithm").value;

    let result;
    switch (algo) {
      case "fcfs":
        result = fcfs(burst, arrival);
        break;
      case "sjf":
        result = sjf(burst, arrival);
        break;
      case "priority":
        result = priorityScheduling(burst, arrival, priorities);
        break;
      case "rr":
        result = roundRobin(burst, arrival, quantum || 2);
        break;
      default:
        result = fcfs(burst, arrival);
    }

    displayResults(result);
  };

  const parseInput = (id, size = null, defaultVal = 0) => {
    const val = document.getElementById(id).value;
    if (!val && size !== null) return Array(size).fill(defaultVal);
    return val.split(',').map(Number);
  };

  const fcfs = (burst, arrival) => {
    const n = burst.length;
    const proc = burst.map((bt, i) => ({ id: i + 1, bt, at: arrival[i] }));
    proc.sort((a, b) => a.at - b.at);

    let time = 0, gantt = [], totalWT = 0, totalTAT = 0;

    proc.forEach(p => {
      if (time < p.at) time = p.at;
      const start = time;
      time += p.bt;
      gantt.push({ id: p.id, start, end: time });
      const tat = time - p.at;
      const wt = tat - p.bt;
      totalWT += wt;
      totalTAT += tat;
    });

    return {
      gantt,
      avgWT: totalWT / n,
      avgTAT: totalTAT / n
    };
  };

  const sjf = (burst, arrival) => {
    const n = burst.length;
    let time = 0, completed = 0, gantt = [], visited = Array(n).fill(false);
    let totalWT = 0, totalTAT = 0;

    while (completed < n) {
      let idx = -1, minBT = Infinity;
      for (let i = 0; i < n; i++) {
        if (!visited[i] && arrival[i] <= time && burst[i] < minBT) {
          minBT = burst[i];
          idx = i;
        }
      }

      if (idx === -1) {
        time++;
        continue;
      }

      const start = time;
      time += burst[idx];
      visited[idx] = true;
      completed++;
      gantt.push({ id: idx + 1, start, end: time });
      const tat = time - arrival[idx];
      const wt = tat - burst[idx];
      totalWT += wt;
      totalTAT += tat;
    }

    return {
      gantt,
      avgWT: totalWT / n,
      avgTAT: totalTAT / n
    };
  };

  const priorityScheduling = (burst, arrival, priorities) => {
    const n = burst.length;
    const proc = burst.map((bt, i) => ({ id: i + 1, bt, at: arrival[i], pr: priorities[i] }));
    let time = 0, completed = 0, gantt = [], visited = Array(n).fill(false);
    let totalWT = 0, totalTAT = 0;

    while (completed < n) {
      let idx = -1, minPr = Infinity;
      for (let i = 0; i < n; i++) {
        if (!visited[i] && arrival[i] <= time && priorities[i] < minPr) {
          minPr = priorities[i];
          idx = i;
        }
      }

      if (idx === -1) {
        time++;
        continue;
      }

      const start = time;
      time += burst[idx];
      visited[idx] = true;
      completed++;
      gantt.push({ id: idx + 1, start, end: time });
      const tat = time - arrival[idx];
      const wt = tat - burst[idx];
      totalWT += wt;
      totalTAT += tat;
    }

    return {
      gantt,
      avgWT: totalWT / n,
      avgTAT: totalTAT / n
    };
  };

  const roundRobin = (burst, arrival, quantum) => {
    const n = burst.length;
    const remaining = [...burst];
    const queue = [], gantt = [];
    let time = 0, totalWT = 0, totalTAT = 0;
    let completed = 0, arrived = Array(n).fill(false);

    function enqueue(i) {
      if (!arrived[i] && arrival[i] <= time) {
        queue.push(i);
        arrived[i] = true;
      }
    }

    for (let i = 0; i < n; i++) enqueue(i);

    while (queue.length > 0) {
      const i = queue.shift();
      const start = time;
      const run = Math.min(quantum, remaining[i]);
      remaining[i] -= run;
      time += run;
      gantt.push({ id: i + 1, start, end: time });

      for (let j = 0; j < n; j++) enqueue(j);

      if (remaining[i] > 0) queue.push(i);
      else {
        completed++;
        const tat = time - arrival[i];
        const wt = tat - burst[i];
        totalWT += wt;
        totalTAT += tat;
      }
    }

    return {
      gantt,
      avgWT: totalWT / n,
      avgTAT: totalTAT / n
    };
  };

  const displayResults = ({ gantt, avgWT, avgTAT }) => {
    const ganttDiv = ganttRef.current;
    const resultsDiv = resultsRef.current;
    ganttDiv.innerHTML = '';

    gantt.forEach(block => {
      const div = document.createElement("div");
      div.className = "gantt-block";
      div.style.backgroundColor = "#4CAF50";
      div.style.color = "white";
      div.style.padding = "10px";
      div.style.borderRadius = "4px";
      div.style.margin = "2px";
      div.style.minWidth = "50px";
      div.innerHTML = `P${block.id}<br>${block.start}-${block.end}`;
      ganttDiv.appendChild(div);
    });

    resultsDiv.textContent = `Average Waiting Time: ${avgWT.toFixed(2)}\nAverage Turnaround Time: ${avgTAT.toFixed(2)}`;
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl text-white">
      <h3 className="text-2xl font-bold mb-4 text-center">CPU Scheduling Simulator</h3>
      <div className="mb-4">
        <input className="w-full p-2 mb-2 text-black" id="burstTimes" placeholder="Burst Times (e.g., 5,3,8)" />
        <input className="w-full p-2 mb-2 text-black" id="arrivalTimes" placeholder="Arrival Times (optional)" />
        <input className="w-full p-2 mb-2 text-black" id="priorities" placeholder="Priorities (for Priority Scheduling)" />
        <input className="w-full p-2 mb-2 text-black" id="quantum" type="number" placeholder="Time Quantum (for RR)" />
        <select className="w-full p-2 mb-4 text-black" id="algorithm">
          <option value="fcfs">FCFS</option>
          <option value="sjf">SJF</option>
          <option value="priority">Priority</option>
          <option value="rr">Round Robin</option>
        </select>
        <button onClick={simulate} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition w-full"
        >Simulate</button>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Gantt Chart</h4>
        <div id="gantt" ref={ganttRef} className="flex flex-wrap gap-1 mb-4"></div>
        <h4 className="font-semibold">Results</h4>
        <pre ref={resultsRef} className="bg-black p-4 rounded text-green-400"></pre>
      </div>
    </div>
  );
};

export default CPUScheduler;

import React, { useEffect, useRef } from 'react';

const BubbleSortVisualizer = () => {
  const containerRef = useRef(null);
  const bars = useRef([]);

  const generateBars = (num = 30) => {
    const container = containerRef.current;
    container.innerHTML = '';
    bars.current = [];

    for (let i = 0; i < num; i++) {
      const height = Math.floor(Math.random() * 250) + 20;
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${height}px`;
      bar.style.width = '20px';
      bar.style.backgroundColor = 'steelblue';
      bar.style.margin = '0 2px';

      bars.current.push({ height, element: bar });
      container.appendChild(bar);
    }
  };

  const swap = (i, j) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const temp = bars.current[i].height;
        bars.current[i].height = bars.current[j].height;
        bars.current[j].height = temp;

        bars.current[i].element.style.height = `${bars.current[i].height}px`;
        bars.current[j].element.style.height = `${bars.current[j].height}px`;

        resolve();
      }, 100);
    });
  };

  const bubbleSort = async () => {
    for (let i = 0; i < bars.current.length - 1; i++) {
      for (let j = 0; j < bars.current.length - i - 1; j++) {
        bars.current[j].element.style.backgroundColor = 'red';
        bars.current[j + 1].element.style.backgroundColor = 'red';

        if (bars.current[j].height > bars.current[j + 1].height) {
          await swap(j, j + 1);
        }

        bars.current[j].element.style.backgroundColor = 'steelblue';
        bars.current[j + 1].element.style.backgroundColor = 'steelblue';
      }
    }
  };

  useEffect(() => {
    generateBars();
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-white">
      <h3 className="text-2xl font-bold mb-4 text-center">Bubble Sort Visualizer</h3>
      <div
        ref={containerRef}
        id="bar-container"
        className="flex items-end h-[300px] border border-gray-500 p-2 gap-1 mx-auto mb-4"
        style={{ width: '100%', overflowX: 'auto' }}
      />
      <div className="flex justify-center gap-4">
      <button
  onClick={() => generateBars()}
  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
>
  Generate Bars
</button>
<button
  onClick={bubbleSort}
  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
>
  Start Sort
</button>

      </div>
    </div>
  );
};

export default BubbleSortVisualizer;

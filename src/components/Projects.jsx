import React from 'react';
import BubbleSortVisualizer from './BubbleSortVisualizer';
import CPUScheduler from './CPUScheduler';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl textwhite text-bold mb-20 text-center">Projects</h2>

        <div className="mb-12">
          <BubbleSortVisualizer />
        </div>

        <div className="mb-12">
          <CPUScheduler />
        </div>
      </div>
    </section>
  );
};

export default Projects;

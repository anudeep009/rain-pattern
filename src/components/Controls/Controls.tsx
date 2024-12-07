import React from 'react';
import { Settings } from 'lucide-react';
import { ControlsProps } from '../../types';

const Controls: React.FC<ControlsProps> = ({ speed, setSpeed, isPaused, togglePause }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-purple-500/20">
      <button
        onClick={togglePause}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/50"
      >
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      
      <div className="flex items-center gap-2">
        <Settings className="w-5 h-5 text-purple-400" />
        <input
          type="range"
          min="1"
          max="10"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-32 accent-purple-500"
        />
        <span className="text-purple-400 text-sm">{speed}x</span>
      </div>
    </div>
  );
};

export default Controls;
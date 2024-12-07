import React, { useState } from 'react';
import Grid from './components/Grid/Grid';
import Controls from './components/Controls/Controls';
import { Droplets } from 'lucide-react';

function App() {
  const [speed, setSpeed] = useState(5);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Droplets className="w-8 h-8 text-pink-400" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-pink-500">
            Rain
          </h1>
        </div>
        <p className="text-pink-500">Watch the neon rain fall in this interactive grid</p>
      </div>

      <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20 shadow-xl">
        <Grid rows={15} cols={20} speed={isPaused ? 0 : speed} />
        
        <div className="mt-6">
          <Controls
            speed={speed}
            setSpeed={setSpeed}
            isPaused={isPaused}
            togglePause={() => setIsPaused(!isPaused)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
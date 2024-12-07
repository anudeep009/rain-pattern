import React from 'react';
import { useRaindrops } from '../../hooks/useRaindrops';
import Cell from './Cell';
import { GridProps } from '../../types';

const Grid: React.FC<GridProps> = ({ rows, cols, speed }) => {
  const raindrops = useRaindrops(rows, cols, speed);

  return (
    <div 
      className="grid gap-0.5 p-2 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl border border-purple-500/20"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        width: 'fit-content'
      }}
    >
      {raindrops.map((row, i) =>
        row.map((cell, j) => (
          <Cell 
            key={`${i}-${j}`} 
            active={cell.active} 
            color={cell.color}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
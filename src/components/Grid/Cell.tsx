import React from 'react';
import { CellProps } from '../../types';

const Cell: React.FC<CellProps> = ({ active, color }) => {
  const colorMap = {
    purple: 'bg-purple-500 shadow-purple-500/50',
    pink: 'bg-pink-500 shadow-pink-500/50',
    blue: 'bg-blue-500 shadow-blue-500/50'
  };

  return (
    <div 
      className={`w-6 h-6 rounded-sm transition-all duration-200 ${
        active 
          ? `${colorMap[color]} shadow-lg scale-105` 
          : 'bg-gray-900/50'
      }`}
    />
  );
};

export default Cell;
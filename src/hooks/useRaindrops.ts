import { useState, useEffect, useCallback } from 'react';
import { Cell } from '../types';

export const useRaindrops = (rows: number, cols: number, speed: number) => {
  const [grid, setGrid] = useState<Cell[][]>(() => 
    Array(rows).fill(null).map(() =>
      Array(cols).fill(null).map(() => ({
        active: false,
        color: getRandomColor()
      }))
    )
  );

  const updateGrid = useCallback(() => {
    setGrid(prevGrid => {
      const newGrid = Array(rows).fill(null).map(() =>
        Array(cols).fill(null).map(() => ({
          active: false,
          color: getRandomColor()
        }))
      );

      // Move existing drops down
      for (let i = rows - 1; i >= 0; i--) {
        for (let j = 0; j < cols; j++) {
          if (i === rows - 1) {
            if (prevGrid[i][j].active) {
              newGrid[i][j].active = false;
            }
          } else if (prevGrid[i][j].active) {
            newGrid[i + 1][j] = {
              active: true,
              color: prevGrid[i][j].color
            };
          }
        }
      }

      // Generate new drops at top with higher probability
      for (let j = 0; j < cols; j++) {
        if (Math.random() < 0.3) { // Increased probability from 0.1 to 0.3
          newGrid[0][j] = {
            active: true,
            color: getRandomColor()
          };
        }
      }

      return newGrid;
    });
  }, [rows, cols]);

  useEffect(() => {
    if (speed === 0) return;

    const interval = setInterval(updateGrid, 100 / speed);
    return () => clearInterval(interval);
  }, [speed, updateGrid]);

  return grid;
};

const getRandomColor = () => {
  const colors = ['purple', 'pink', 'blue'] as const;
  return colors[Math.floor(Math.random() * colors.length)];
};
export interface Cell {
  active: boolean;
  color: string;
}

export interface GridProps {
  rows: number;
  cols: number;
  speed: number;
}

export interface CellProps {
  active: boolean;
  color: string;
}

export interface ControlsProps {
  speed: number;
  setSpeed: (speed: number) => void;
  isPaused: boolean;
  togglePause: () => void;
}
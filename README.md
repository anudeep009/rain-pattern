# Rain Grid

An interactive, cyberpunk-themed rain animation built with React and TypeScript. This project features a dynamic grid system that simulates falling raindrops with neon effects and customizable controls.


## Features

- 15x20 dynamic grid system
- Animated raindrops with varying intensities
- Neon-styled visual effects
- Interactive controls:
  - Adjustable rain speed
  - Pause/Resume functionality
- Responsive design
- color scheme

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)

## Project Structure

```
src/
├── components/
│   ├── Controls/
│   │   └── Controls.tsx
│   └── Grid/
│       ├── Cell.tsx
│       └── Grid.tsx
├── hooks/
│   └── useRaindrops.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## Component Overview

### Grid System
- `Grid.tsx`: Main container component that manages the grid layout
- `Cell.tsx`: Individual cell component with dynamic styling based on raindrop state

### Controls
- Speed adjustment (1x to 10x)
- Pause/Resume functionality
- Real-time animation control

### Hooks
- `useRaindrops`: Custom hook managing raindrop generation and movement logic

## Animation Details

The rain animation implements several key features:
- Dynamic drop generation
- Intensity variation
- Adjacent cell awareness for natural streaming effects
- Smooth transitions and glow effects

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development

The project uses:
- ESLint for code quality
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for fast development and building

## License

MIT License - feel free to use this project for learning or as a base for your own creative ideas!

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

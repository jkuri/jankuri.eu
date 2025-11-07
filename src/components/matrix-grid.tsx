"use client";

import { useEffect, useState } from "react";

export function MatrixGrid() {
  // Configuration for the dot matrix
  const dotSize = 12;
  const dotGap = 4;

  // State for viewport dimensions
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    // Calculate initial dimensions
    const updateDimensions = () => {
      const cols = Math.ceil(window.innerWidth / (dotSize + dotGap));
      const rows = Math.ceil(window.innerHeight / (dotSize + dotGap));
      setDimensions({ cols, rows });
    };

    // Set initial dimensions
    updateDimensions();

    // Update on resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [dotSize, dotGap]);

  const { cols, rows } = dimensions;

  // Don't render until we have dimensions
  if (cols === 0 || rows === 0) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-white dark:bg-zinc-950" />
    );
  }

  const renderDotMatrix = () => {
    const matrix = [];

    for (let col = 0; col < cols; col++) {
      // Create a wave pattern with some randomness
      // Base height varies across columns to create the wave effect
      const waveOffset = Math.sin(col * 0.05) * 2;
      const randomVariation = (Math.random() - 0.5) * 1.5;

      // Calculate heights for each layer (from bottom)
      const whiteHeight = Math.floor(8 + waveOffset + randomVariation);
      const grayHeight = Math.floor(4 + (Math.random() - 0.5) * 0.5);

      for (let row = 0; row < rows; row++) {
        const rowFromBottom = rows - row - 1;

        let color = "";

        if (rowFromBottom < whiteHeight) {
          // Bottom layer: white in dark mode, zinc-800 in light mode
          color = "bg-zinc-800 dark:bg-white";
        }
        // Gray dots in the middle layer
        else if (rowFromBottom < whiteHeight + grayHeight) {
          // Middle layer: gray in both modes, slightly lighter in light mode
          color = "bg-zinc-400 dark:bg-zinc-500";
        }
        // Top layer: dark in dark mode, very light in light mode
        else {
          color = "bg-zinc-50 dark:bg-zinc-900";
        }

        const x = col * (dotSize + dotGap);
        const y = row * (dotSize + dotGap);

        matrix.push(
          <div
            key={`${col}-${row}`}
            className={`absolute rounded-full ${color}`}
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              left: `${x}px`,
              top: `${y}px`,
            }}
          />,
        );
      }
    }

    return matrix;
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-zinc-950">
      {renderDotMatrix()}
    </div>
  );
}

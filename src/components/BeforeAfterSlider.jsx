import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export const BeforeAfterSlider = ({ beforeImage, afterImage, title, beforeLabel = "Before (Demo)", afterLabel = "After (Demo)" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 5) position = 5;
    if (position > 95) position = 95;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(95, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-dark-border select-none touch-none bg-slate-900 group"
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt={`${title} - ${afterLabel}`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />
      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-navy-900/80 text-white text-xs font-semibold backdrop-blur-md">
        {afterLabel}
      </div>

      {/* Before Image (Clipped) */}
      <div
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={beforeImage}
          alt={`${title} - ${beforeLabel}`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-navy-900/80 text-white text-xs font-semibold backdrop-blur-md">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Divider Line */}
      <div
        style={{ left: `${sliderPosition}%` }}
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize -ml-0.5"
      >
        {/* Slider Handle */}
        <button
          type="button"
          tabIndex={0}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Interactive before after comparison for ${title}`}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full bg-white dark:bg-navy-900 text-brand-600 dark:text-brand-400 border-2 border-brand-500 shadow-xl flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <ChevronsLeftRight className="w-4 h-4" />
        </button>
      </div>

      {/* Hover Instruction Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3.5 py-1 rounded-full bg-black/60 text-white text-[11px] font-medium backdrop-blur-md pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
        Drag or use arrow keys to compare
      </div>
    </div>
  );
};

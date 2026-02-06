'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 text-white">
      <div className="text-center">
        <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
        </div>
        <div className="text-xs mt-1">Hours</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
        </div>
        <div className="text-xs mt-1">Minutes</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
        </div>
        <div className="text-xs mt-1">Seconds</div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Timer from "@/components/Timer";
import Controllers from "@/components/Controllers";
import { useTimerMinutes } from "@/lib/timer-storage";

export default function Home() {
  const minutes = useTimerMinutes();
  // 시작 후 경과한 초
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  const remainingSeconds = Math.max(minutes * 60 - elapsed, 0);
  const isRunning = running && remainingSeconds > 0;

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setElapsed((prev) => prev + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-semibold">pomodoro</h1>
      <Timer remainingSeconds={remainingSeconds} />
      <Controllers
        isRunning={isRunning}
        canStart={remainingSeconds > 0}
        onStart={() => setRunning(true)}
        onStop={() => setRunning(false)}
        onReset={handleReset}
      />
    </main>
  );
}

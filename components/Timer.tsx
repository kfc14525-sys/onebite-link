type TimerProps = {
  remainingSeconds: number;
};

export default function Timer({ remainingSeconds }: TimerProps) {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");

  return (
    <div className="text-7xl font-mono font-bold tabular-nums">
      {minutes}:{seconds}
    </div>
  );
}

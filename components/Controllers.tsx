import Link from "next/link";

type ControllersProps = {
  isRunning: boolean;
  canStart: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
};

const buttonClass =
  "btn-secondary rounded-md px-4 py-2 text-sm font-medium";

export default function Controllers({
  isRunning,
  canStart,
  onStart,
  onStop,
  onReset,
}: ControllersProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className={buttonClass}
        onClick={onStart}
        disabled={isRunning || !canStart}
      >
        시작
      </button>
      <button
        type="button"
        className={buttonClass}
        onClick={onStop}
        disabled={!isRunning}
      >
        정지
      </button>
      <button type="button" className={buttonClass} onClick={onReset}>
        초기화
      </button>
      <Link href="/setting" className={buttonClass}>
        설정
      </Link>
    </div>
  );
}

import Link from "next/link";

type ControllersProps = {
  isRunning: boolean;
  canStart: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
};

const buttonClass =
  "transition duration-150 ease-out not-disabled:hover:-translate-y-0.5 not-disabled:hover:shadow-md not-disabled:active:translate-y-0 not-disabled:active:scale-95 " +
  "rounded-lg border border-zinc-300 px-4 py-2 font-medium hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-900";

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

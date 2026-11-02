"use client";

import { useState } from "react";
import {
  MAX_MINUTES,
  MIN_MINUTES,
  isValidMinutes,
  useTimerMinutes,
} from "@/lib/timer-storage";

type TimerSettingInputProps = {
  onSubmit: (minutes: number) => void;
};

export default function TimerSettingInput({
  onSubmit,
}: TimerSettingInputProps) {
  const savedMinutes = useTimerMinutes();
  const [draft, setDraft] = useState<string | null>(null);

  const value = draft ?? String(savedMinutes);
  const minutes = value.trim() === "" ? NaN : Number(value);
  const canSubmit = isValidMinutes(minutes);

  return (
    <form
      className="flex items-center gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (canSubmit) onSubmit(minutes);
      }}
    >
      <input
        type="number"
        inputMode="numeric"
        min={MIN_MINUTES}
        max={MAX_MINUTES}
        step={1}
        value={value}
        onChange={(e) => setDraft(e.target.value)}
        aria-label="타이머 시간(분)"
        className="field w-24 rounded-md px-3 py-2"
      />
      <span>분 ({MIN_MINUTES}~{MAX_MINUTES})</span>
      <button
        type="submit"
        disabled={!canSubmit}
        className="btn-primary rounded-md px-4 py-2 text-sm font-medium"
      >
        설정 완료
      </button>
    </form>
  );
}

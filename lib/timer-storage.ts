import { useSyncExternalStore } from "react";

export const STORAGE_KEY = "pomodoro-minutes";
export const DEFAULT_MINUTES = 25;
export const MIN_MINUTES = 1;
export const MAX_MINUTES = 60;

const CHANGE_EVENT = "pomodoro-minutes-change";

export function isValidMinutes(value: number) {
  return Number.isInteger(value) && value >= MIN_MINUTES && value <= MAX_MINUTES;
}

function readMinutes() {
  try {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    return isValidMinutes(saved) ? saved : DEFAULT_MINUTES;
  } catch {
    return DEFAULT_MINUTES;
  }
}

export function saveMinutes(minutes: number) {
  try {
    localStorage.setItem(STORAGE_KEY, String(minutes));
  } catch {
    // 저장소를 쓸 수 없으면 무시
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useTimerMinutes() {
  return useSyncExternalStore(subscribe, readMinutes, () => DEFAULT_MINUTES);
}

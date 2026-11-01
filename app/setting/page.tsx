"use client";

import { useRouter } from "next/navigation";
import TimerSettingInput from "@/components/TimerSettingInput";
import { saveMinutes } from "@/lib/timer-storage";

export default function SettingPage() {
  const router = useRouter();

  const handleSubmit = (minutes: number) => {
    saveMinutes(minutes);
    router.push("/");
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6">
      <h3 className="text-xl font-semibold">Setting</h3>
      <TimerSettingInput onSubmit={handleSubmit} />
    </main>
  );
}

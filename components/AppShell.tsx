import type { ReactNode } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { folders } from "@/lib/mock-data";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar folders={folders} />
        <main className="mx-auto w-full max-w-[720px] flex-1 px-6 pt-10 pb-12">{children}</main>
      </div>
    </div>
  );
}

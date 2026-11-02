import AppShell from "@/components/AppShell";
import NewLinkForm from "@/components/NewLinkForm";
import { folders } from "@/lib/mock-data";

export default function NewLinkPage() {
  return (
    <AppShell>
      <h1 className="mb-6 text-2xl font-semibold">새 링크</h1>
      <NewLinkForm folders={folders} />
    </AppShell>
  );
}

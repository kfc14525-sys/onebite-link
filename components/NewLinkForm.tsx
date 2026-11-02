import type { Folder } from "@/lib/mock-data";

type NewLinkFormProps = {
  folders: Folder[];
};

const fieldClass =
  "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900";

export default function NewLinkForm({ folders }: NewLinkFormProps) {
  return (
    <form className="flex max-w-xl flex-col gap-5">
      <label className="flex flex-col gap-2 text-sm font-medium">
        링크
        <input
          type="url"
          name="url"
          placeholder="https://example.com"
          required
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium">
        폴더
        <select name="folderId" defaultValue="" required className={fieldClass}>
          <option value="" disabled>
            폴더를 선택하세요
          </option>
          {folders.map((folder) => (
            <option key={folder.id} value={folder.id}>
              {folder.name}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="self-start rounded-lg bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        저장
      </button>
    </form>
  );
}

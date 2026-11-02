import type { Folder } from "@/lib/mock-data";

type NewLinkFormProps = {
  folders: Folder[];
};

const fieldClass =
  "field w-full rounded-md px-3 py-2 text-base font-normal";

export default function NewLinkForm({ folders }: NewLinkFormProps) {
  return (
    <form className="flex max-w-xl flex-col gap-4">
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
        className="btn-primary self-start rounded-md px-4 py-2 text-sm font-medium"
      >
        저장
      </button>
    </form>
  );
}

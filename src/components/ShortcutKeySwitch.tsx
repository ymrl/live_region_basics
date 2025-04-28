import { useContext } from "react";
import { ShortcutKeyContext } from "../ShortcutKeyContext";
export const ShortcutKeySwitch = () => {
  const { enabled, setEnabled } = useContext(ShortcutKeyContext);

  return (
    <label className="flex flex-row items-center bg-gray-100 px-4 py-2 rounded">
      <input
        type="checkbox"
        className="mr-2 scale-125"
        checked={enabled}
        onChange={(e) => setEnabled(e.target.checked)}
      />
      <span className="text-sm font-mono">
        ショートカットキーを有効にしておく
      </span>
    </label>
  );
};

import { createContext } from "react";
export const ShortcutKeyContext = createContext<{ enabled: boolean,
  setEnabled: (enabled: boolean) => void
 }>({
  enabled: true,
  setEnabled: () => {},
});

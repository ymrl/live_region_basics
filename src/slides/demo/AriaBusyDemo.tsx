import { useState } from "react";
import { Attribute, WhatTime } from "./components";
export const AriaBusyDemo = () => {
  const [busy, setBusy] = useState(false);

  return (
    <div className="mt-4 flex flex-col items-start gap-2 w-full">
      <Attribute<"true" | "false">
        options={["true"]}
        value={busy ? "true" : "false"}
        onChange={(_option, checked) => {
          setBusy(checked);
        }}
        name="ariaBusyDemo-busy"
        labelSuffix="aria-busy: "
        />
      <WhatTime aria-live="polite" aria-busy={busy} />
    </div>
  );
};

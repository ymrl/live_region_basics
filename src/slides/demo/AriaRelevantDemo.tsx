import { useState, AriaAttributes } from "react";
import { Attribute, WhatTime } from "./components";

type AriaRelevantType = "additions" | "removals" | "text" | "all";

export const AriaRelevantDemo = () => {
  const [relevantValues, setRelevantValues] = useState<AriaRelevantType[]>([
    "additions",
    "text",
  ]);

  const selectedAll = relevantValues.includes("all");

  const relevantAttribute = selectedAll
    ? "all"
    : (relevantValues.join(" ") as AriaAttributes["aria-relevant"]);

  return (
    <div className="flex flex-col items-stretch gap-2 w-full">
      <Attribute<AriaRelevantType>
        multiple={true}
        values={relevantValues}
        options={["additions", "text", "removals", "all"]}
        onChange={(option, checked) => {
          setRelevantValues((prev) => {
            const included = prev.includes(option);
            if (checked && !included) {
              return [...prev, option];
            } else {
              return prev.filter((v) => v !== option);
            }
          });
        }}
        name="ariaRelevantDemo-relevant"
        disableds={[selectedAll, selectedAll, selectedAll, false]}
      />
      <WhatTime
        aria-live="polite"
        aria-relevant={relevantAttribute}
        updateType="element"
        updateTagName="div"
      />
    </div>
  );
};

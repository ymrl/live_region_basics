import { useState, AriaAttributes } from "react";
import { Attribute, WhatTime } from "./components";

type AriaRelevantType = "additions" | "removals" | "text" | "all";

export const AriaRelevantDemo = () => {
  const [relevantValues, setRelevantValues] = useState<AriaRelevantType[]>([
    "additions",
    "text",
  ]);
  const [TagName, setTagName] = useState<"span" | "div" | undefined>("div");
  const [ParentTagName, setParentTagName] = useState<
    "span" | "div" | undefined
  >(undefined);

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
        updateTagName={TagName}
        updateParentTagName={ParentTagName}
      />
      <div className="flex flex-row items-center gap-4 flex-wrap">
        <fieldset className="flex flex-row gap-2 flex-wrap">
          <legend className="text-sm font-mono">TagName</legend>
          {(["div", "span", undefined] as const).map((tag) => (
            <label
              className="flex flex-row items-center bg-gray-100 px-4 py-2 rounded"
              key={tag}
            >
              <input
                type="radio"
                className="mr-2 scale-125"
                name="relevantDemo-tagName"
                checked={TagName === tag}
                onChange={(e) => {
                  if (e.target.checked) {
                    setTagName(tag);
                  }
                }}
              />
              <span className="text-sm font-mono">
                {tag ? `<${tag}>` : "React.Fragment"}
              </span>
            </label>
          ))}
        </fieldset>
        <fieldset className="flex flex-row gap-2 flex-wrap">
          <legend className="text-sm font-mono">ParentTagName</legend>
          {(["div", "span", undefined] as const).map((tag) => (
            <label
              className="flex flex-row items-center bg-gray-100 px-4 py-2 rounded"
              key={tag}
            >
              <input
                type="radio"
                className="mr-2 scale-125"
                name="relevantDemo-parentTagName"
                checked={ParentTagName === tag}
                onChange={(e) => {
                  if (e.target.checked) {
                    setParentTagName(tag);
                  }
                }}
              />
              <span className="text-sm font-mono">
                {tag ? `<${tag}>` : "React.Fragment"}
              </span>
            </label>
          ))}
        </fieldset>
      </div>
    </div>
  );
};

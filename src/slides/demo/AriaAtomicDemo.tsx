import { useState } from "react";
import { Attribute, WhatTime } from "./components";
export const AriaAtomicDemo = () => {
  const [atomic, setAtomic] = useState<"true" | "false">("false");
  const [TagName, setTagName] = useState<"span" | "div" | undefined>("div");
  const [ParentTagName, setParentTagName] = useState<
    "span" | "div" | undefined
  >(undefined);
  const [hasLiveRegionLabel, setHasLiveRegionLabel] = useState(true);

  return (
    <div className="flex flex-col items-stretch gap-2 w-full">
      <Attribute<"true" | "false">
        value={atomic}
        options={["true", "false"]}
        onChange={(option, checked) => checked && setAtomic(option)}
        name="ariaAtomicDemo-atomic"
        labelSuffix="aria-atomic: "
      />

      <WhatTime
        aria-live="polite"
        aria-atomic={atomic}
        updateType="element"
        updateTagName={TagName}
        updateParentTagName={ParentTagName}
        liveRegionTagName="section"
        aria-label={hasLiveRegionLabel ? "勝手に時刻通知" : undefined}
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
                name="tagName"
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
          {([undefined, "div", "span"] as const).map((tag) => (
            <label
              className="flex flex-row items-center bg-gray-100 px-4 py-2 rounded"
              key={tag}
            >
              <input
                type="radio"
                className="mr-2 scale-125"
                name="parentTagName"
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
      <label className="flex flex-row items-center bg-gray-100 px-4 py-2 rounded">
        <input
          type="checkbox"
          className="mr-2 scale-125"
          name="tagName"
          checked={hasLiveRegionLabel}
          onChange={(e) => {
            setHasLiveRegionLabel(e.target.checked);
          }}
        />
        <span className="text-sm font-mono">
          ライブリージョンにラベルを付ける
        </span>
      </label>
    </div>
  );
};

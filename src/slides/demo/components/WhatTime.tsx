import {
  useState,
  ReactNode,
  JSX,
  AriaRole,
  Fragment,
  useCallback,
  useRef,
} from "react";
import { Button } from "./Button";
import { LiveRegion, LiveRegionAttributes } from "./LiveRegion";

export const WhatTime = ({
  updateType = "string",
  updateTagName,
  liveRegionTagName = "div",
  buttonLabel = "いま何時？",
  ariaLive,
  updateParentTagName,
  delay = 0,
  ...args
}: {
  updateType?: "string" | "element";
  updateTagName?: keyof JSX.IntrinsicElements;
  liveRegionTagName?: keyof JSX.IntrinsicElements;
  buttonLabel?: string;
  role?: AriaRole;
  ariaLive?: LiveRegionAttributes["aria-live"] | "none";
  updateParentTagName?: keyof JSX.IntrinsicElements;
  delay?: number;
} & LiveRegionAttributes) => {
  const [message, setMessage] = useState<ReactNode>(undefined);
  const timeoutRef = useRef<number | undefined>(undefined);
  const updateMesssage = useCallback(() => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const TagName = updateTagName || Fragment;
    const ParentTag = updateParentTagName || Fragment;
    const message =
      updateType === "string" ? (
        `そうね、だいたい${hour}時${min}分${sec}秒ね`
      ) : (
        <ParentTag>
          そうね、だいたい
          <TagName className="inline">{`${hour}時`}</TagName>
          <TagName className="inline">{`${min}分`}</TagName>
          <TagName className="inline">{`${sec}秒`}</TagName>ね
        </ParentTag>
      );
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setMessage(message);
      }, delay);
    } else {
      setMessage(message);
    }
  }, [delay, updateParentTagName, updateTagName, updateType]);
  return (
    <div className="flex flex-row items-stretch justify-stretch gap-2 flex-wrap w-full">
      <Button onClick={updateMesssage}>{buttonLabel}</Button>
      <LiveRegion
        tagName={liveRegionTagName}
        aria-live={ariaLive === "none" ? undefined : ariaLive}
        {...args}
      >
        {message}
      </LiveRegion>
      <Button
        onClick={() => {
          setMessage(undefined);
        }}
      >
        クリア
      </Button>
    </div>
  );
};

import { LiveRegion, Button } from "./components";
import { useState, ReactNode, JSX, AriaRole } from "react";

export const AppearDemo = ({
  tagName = "div",
  ariaLive = "polite",
  role,
  buttonLabel = "いま何時？",
}: {
  tagName?: keyof JSX.IntrinsicElements;
  ariaLive?: "polite" | "assertive" | "off" | "none";
  role?: AriaRole;
  buttonLabel?: string;
}) => {
  const [message, setMessage] = useState<ReactNode>(undefined);
  return (
    <div className="flex flex-row items-stretch justify-stretch gap-2 flex-wrap w-full">
      <Button
        onClick={() => {
          const now = new Date();
          const hour = now.getHours();
          const min = now.getMinutes();
          const sec = now.getSeconds();
          setMessage(
              <span>
                そうね、だいたい
                <span>{`${hour}時`}</span>
                <span>{`${min}分`}</span>
                <span>{`${sec}秒`}</span>ね
              </span>
          );
        }}
      >
        {buttonLabel}
      </Button>
      <div className="grow-1">
        {message && (
          <LiveRegion
            tagName={tagName}
            aria-live={ariaLive === "none" ? undefined : ariaLive}
            role={role}
            
          >
            {message}
          </LiveRegion>
        )}
      </div>
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

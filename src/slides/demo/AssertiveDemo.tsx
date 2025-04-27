import { useState, useCallback, useEffect, useRef } from "react";
import { Attribute, Button, LiveRegion, WhatTime } from "./components";
export const AssertiveDemo = () => {
  const [live, setLive] = useState<"assertive" | "polite" | "off">("polite");
  const [message, setMessage] = useState('');
  const [active, setActive] = useState(false);
  const intervalIdRef = useRef<number | undefined>(undefined);
  const updateClock = useCallback(() => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    setMessage(`${hour}時${min}分${sec}秒`);
  }, []);
  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = undefined;
      }
    };
  }, []);
  return (
    <div className="flex flex-col items-stretch gap-2 w-full">
      <div className="flex flex-row items-center gap-2 w-full flex-wrap">
        <Button
          disabled={active}
          onClick={() => {
            intervalIdRef.current = setInterval(updateClock, 1000)
            setActive(true)
          }}>
          時計スタート
        </Button>
        <Button
          disabled={!active}
          onClick={() => {
            setActive(false);
            clearInterval(intervalIdRef.current)
            intervalIdRef.current = undefined;
          }}>
          時計ストップ
        </Button>
        <LiveRegion aria-live={live}>{message}</LiveRegion>
        <Attribute<"assertive" | "polite" | "off">
          name="assertiveDemo-live"
          options={["assertive", "polite", "off"]}
          value={live}
          onChange={(option, checked) => {
            setLive(checked ? option : "off");
          }}
        />
      </div>
      <WhatTime aria-live="assertive" delay={3000} buttonLabel="3秒後は何時？（assertive）" />
      <WhatTime aria-live="polite" delay={3000} buttonLabel="3秒後は何時？（polite）" />
    </div>
  );
};

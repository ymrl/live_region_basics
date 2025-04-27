import { useCallback, useEffect, useRef, useState } from "react";
import { Button, LiveRegion } from ".";
export const PoliteClock = () => {
  const [message, setMessage] = useState("");
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
    <div className="flex flex-row items-center gap-2 w-full flex-wrap">
      <Button
        disabled={active}
        onClick={() => {
          intervalIdRef.current = setInterval(updateClock, 1000);
          setActive(true);
        }}
      >
        時計スタート
      </Button>
      <Button
        disabled={!active}
        onClick={() => {
          setActive(false);
          clearInterval(intervalIdRef.current);
          intervalIdRef.current = undefined;
        }}
      >
        時計ストップ
      </Button>
      <LiveRegion aria-live="polite">{message}</LiveRegion>
    </div>
  );
};

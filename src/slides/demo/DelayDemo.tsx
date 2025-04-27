import { LiveRegion, Button } from "./components";
import { useState, ReactNode, useEffect } from "react";

export const DelayDemo = () => {
  const [message, setMessage] = useState<ReactNode>(undefined);
  const [delayTime, setDelayTime] = useState(50);
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    if (message) {
      const id = setTimeout(() => {
        setShowMessage(true);
      }, delayTime);
      return () => {
        clearTimeout(id);
      };
    } else {
      setShowMessage(false);
    }
  }, [message, delayTime]);

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <label>
        <span className="text-xs">遅らせる時間（ミリ秒）</span>
        <input
          type="number"
          className="ml-2 w-20 border border-gray-300 rounded px-2 py-1 text-xs"
          min={0}
          value={delayTime}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value)) {
              setDelayTime(value);
              setMessage(undefined);
            }
          }}
        />
      </label>
      <div className="flex flex-row items-stretch justify-stretch gap-2 flex-wrap w-full">
        <Button
          onClick={() => {
            const now = new Date();
            const hour = now.getHours();
            const min = now.getMinutes();
            const sec = now.getSeconds();
            setMessage(`そうね、だいたい${hour}時${min}分${sec}秒ね`);
          }}
        >
          いま何時？
        </Button>
        <div className="grow-1">
          {message && (
            <LiveRegion aria-live="polite">{showMessage && message}</LiveRegion>
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
    </div>
  );
};

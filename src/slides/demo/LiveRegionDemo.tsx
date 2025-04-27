import { useState } from "react";
export const LiveRegionDemo = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-row items-stretch justify-stretch flex-wrap gap-2 w-full">
      <button
        className="h-12 inline-flex flex-row items-center px-2 py-1 text-sm
          border-2 border-gray-200 bg-gray-100 rounded-md active:bg-gray-300 grow-0 shrink-0"
        onClick={() => {
          const now = new Date();
          const hour = now.getHours();
          const min = now.getMinutes();
          const sec = now.getSeconds();
          setMessage(`そうね、だいたい${hour}時${min}分${sec}秒ね`);
        }}
      >
        いま何時？
      </button>
      <div
        className="min-h-12 inline-flex flex-row items-center px-2 py-1 text-sm
          text-amber-900 bg-amber-200 rounded-md grow-1"
        aria-live="polite"
      >
        {message}
      </div>
      <button
        className="h-12 inline-flex flex-row items-center px-2 py-1 text-sm
          border-2 border-gray-200 bg-gray-100 rounded-md active:bg-gray-300 grow-0 shrink-0"
        onClick={() => {
          setMessage("");
        }}
      >
        クリア
      </button>
    </div>
  );
};

'use client'
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function MessageInput() {
  const [value, setValue] = useState("");




  return (
    <div className="w-full max-w-xl mx-auto flex items-center gap-2 rounded-md border bg-white px-3 py-2 shadow-sm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Your Email..."
        className="flex-1 outline-none bg-transparent text-sm md:text-base"
        aria-label="Message"
      />
      <button
        className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-white disabled:opacity-40
                   bg-black hover:bg-black/90 transition"
        aria-label="Send message"
      >
        <FiSend className="-mr-0.5" />
        {/* <span className="hidden sm:inline">Send</span> */}
      </button>
    </div>
  );
}

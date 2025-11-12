import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Landing = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { type: "user", text }]);

    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      const advice = data.slip.advice;

      setMessages(prev => [
        ...prev,
        { type: "bot", text: `Advice for "${text}": ${advice}` },
      ]);

      setText("");
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { type: "bot", text: "Error fetching advice." },
      ]);
      console.error(error);
    }
  };

  return (
    <div className="px-4 flex flex-col items-center pt-[200px] relative">
        {messages.length === 0 && (
    <h1 className="text-[20px] md:text-[30px] font-sans mb-6 text-center">
      Where should we begin?
    </h1>
  )}

      <div className={`flex flex-col items-center gap-3 w-full md:w-[50%] mx-auto ${messages.length > 0 ? 'pb-[120px]' : 'pb-0'}`}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 mb-12 rounded-2xl max-w-full wrap-break-word ${
              msg.type === "user"
                ? "bg-gray-100 self-end text-right"
                : " self-start text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input box */}
      <div className={`${messages.length > 0 ? 'fixed bottom-8 left-0 z-50 w-full bg-white px-4 pb-2 shadow-lg' : 'relative w-full'} flex justify-center`}>
        <div className="w-full md:w-[50%] relative">
          <input
            type="text"
            placeholder="Ask anything..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-16 p-4 pr-12 rounded-4xl bg-white border border-gray-300 shadow-lg outline-none"
          />
          {text.trim() !== "" && (
            <button
              onClick={handleSend}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
            >
              <ArrowUpwardIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;

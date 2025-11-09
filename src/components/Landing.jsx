import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Landing = () => {
  const [text, setText] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    try {
    
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();

      setReply(`Advice for "${text}": ${data.slip.advice}`);
      setText(""); 
    } catch (error) {
      setReply("Error fetching advice.");
      console.error(error);
    }
  };

  return (
    <div className="px-4 flex flex-col items-center pt-[200px]">
      <h1 className="text-[20px] md:text-[30px] font-sans mb-6">
        Where should we begin?
      </h1>

      <div className="w-full md:w-[50%] relative">
        <input
          type="text"
          placeholder="Ask anything"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-16 p-4 pr-12 rounded-4xl bg-white border border-gray-300 shadow-lg outline-none"
        />

        {text.trim() !== "" && (
          <button
            type="button"
            onClick={handleSend}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
          >
            <ArrowUpwardIcon />
          </button>
        )}
      </div>

     {reply && (
  <div className="mt-6 w-full md:w-[50%] bg-linear-to-br from-white/90 via-blue-50/80 to-purple-50/80 border border-gray-200 shadow-xl rounded-3xl p-5 text-left break-words transform transition-all duration-300 hover:scale-[1.02]">
    <p className="text-gray-900 font-medium text-base leading-relaxed">{reply}</p>
  </div>
)}
    </div>
  );
};

export default Landing;

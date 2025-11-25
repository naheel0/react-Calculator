import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "C", "/", "*", "-",
    "7", "8", "9", "+",
    "4", "5", "6", 
    "1", "2", "3", 
    "0", ".", "=", 
  ];

  const getButtonClass = (btn) => {
    const baseClass = "h-14 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#22D3EE] active:transform active:scale-95";
    
    if (btn === "C") {
      return `${baseClass} bg-[#22D3EE] hover:bg-[#0EA5E9] text-[#0D0D0D] font-bold`;
    } else if (btn === "=") {
      return `${baseClass} bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold row-span-2`;
    } else if (["/", "*", "-", "+"].includes(btn)) {
      return `${baseClass} bg-[#22D3EE] hover:bg-[#0EA5E9] text-[#0D0D0D] font-bold`;
    } else {
      return `${baseClass} bg-[#1F2937] hover:bg-[#374151] text-[#E5E7EB]`;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-4">
      <div className="bg-[#0D0D0D] rounded-2xl p-6 w-full max-w-xs border border-[#1F2937]">
        {/* Display */}
        <div className="mb-6">
          <input 
            className="w-full h-20 px-4 text-right text-3xl font-bold bg-[#111827] text-[#E5E7EB] rounded-xl border border-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
            value={input} 
            readOnly 
            placeholder="0"
          />
        </div>
        
        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className={getButtonClass(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
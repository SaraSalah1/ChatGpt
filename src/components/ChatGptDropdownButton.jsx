import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChatGptCardDropdown from "./ChatGptCardDropdown";
import { useEffect, useRef, useState  } from "react";

const ChatGptDropdownButton = () => {
const[isOpen ,  setIsOpen] =useState (false);
const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);
 
  return (
    <div >
            <div className="relative"  ref={menuRef}>
              <button onClick={() =>  setIsOpen(!isOpen)}  className='hover:bg-[#f1f1f1] btnHover rounded-[5px] px-2 py-1'>
         <h1 className='text-[20px]'>ChatGPT <KeyboardArrowDownIcon sx={{ color:'#8e8e8e', fontSize: 20 }}/>    
         </h1>
        </button>
        {isOpen && <ChatGptCardDropdown />}
            </div>
       
    </div>
  )
}
export default ChatGptDropdownButton
import { useState, useRef, useEffect } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HelpList from "./HelpList";

const HelpIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <HelpOutlineIcon
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-2xl border border-gray-200 z-50">
          <HelpList />
        </div>
      )}
    </div>
  );
};

export default HelpIcon;

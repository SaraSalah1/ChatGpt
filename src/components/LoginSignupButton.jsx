import { useState } from "react";
import LoginSignupCard from './LoginSignupCard';

const LoginSignupButton = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className='nav-items relative'>
      <button 
        onClick={() => setIsOpen(!isOpen)}  
        className='bg-black text-white rounded-2xl px-2 py-1 border border-white hover:bg-[#242323] btnHover'
      >
        Log in
      </button>

       <button onClick={() =>  setIsOpen(!isOpen)}  className='bg-white text-black rounded-2xl px-2 py-1 border border-gray-300  hover:bg-[#f4f4f4] btnHover'>
        Sign up for free
      </button>

     {isOpen && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <LoginSignupCard onClose={() => setIsOpen(false)} />
  </div>
        )}

    </div>
  );
}

export default LoginSignupButton;

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const LoginSignupCard = ({ onClose }) => {
  const [links, setLinks] = useState([
    { icon: "Google__G__logo.png", text: "Continue with Google" },
    { icon: "Apple_logo.png", text: "Continue with Apple" },
    { icon: "Microsoft_logo.png", text: "Continue with Microsoft" },
    { icon: "Phone_logo.png", text: "Continue with Phone" },
  ]);

  return (
    <div className="fixed top-1/2 left-1/2 w-4/5 md:w-[400px] bg-white border backdrop-blur-md border-gray-300 shadow-lg rounded-4xl transform -translate-x-1/2 -translate-y-1/2 element-center flex-col  p-6">
      
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-black hover:bg-gray-200 rounded-full p-1"
      >
        <CloseIcon />
      </button>

     
      <h1 className="font-semibold text-2xl mb-4 text-center">
        Log in or sign up
      </h1>

     
      <p className="text-center text-sm mb-6">
        You’ll get smarter responses and can upload files, images, and more.
      </p>

  
      <div className="full-width">
        {links.map((link, index) => (
          <a href="/" className="w-full" key={index}>
            <button className="hover:cursor-pointer hover:hover:bg-[#f4f4f4] w-full element-center gap-2 bg-white text-black rounded-4xl px-6 py-3 border border-gray-300 ">
              <img
                src={`/src/assets/images/${link.icon}`}
                alt="icon"
                className="w-5 h-5"
              />
              {link.text}
            </button>
          </a>
        ))}
      </div>
      <div className="relative w-full my-6">
  <hr className="border-gray-300" />
  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-700 font-semibold text-xs">
    OR
  </span>
</div>

<form action="" className="full-width">
    <input type="text" className="element-center gap-2 bg-white text-black rounded-4xl px-6 py-3 border border-gray-300" placeholder="Email address"/>
    <button className="element-center gap-2 bg-black text-white rounded-4xl px-6 py-3 border border-gray-300">Continue</button>
</form>
    </div>
  );
};

export default LoginSignupCard;

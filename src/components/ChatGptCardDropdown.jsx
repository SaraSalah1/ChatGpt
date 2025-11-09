import LoginSignupButton from "./LoginSignupButton";

const ChatGptCardDropdown = () => {
  return (
    <div className="absolute top-full left-0 w-[330px] h-80 bg-white border border-gray-300 shadow-lg rounded-2xl overflow-auto ">

  <img src="/src/assets/images/card.png" alt="Card" className="w-full h-40 object-cover" />


  <div className="p-3">
    <h1 className="font-semibold text-base mb-1 pt-1">Try advanced features for free</h1>
    <p className="text-sm font-normal mb-3">
      Get smarter responses, upload files, create images, and more by logging in.
    </p>

    <div className="nav-items pt-4">
          <LoginSignupButton/>
        </div>
      </div>
    </div>
  );
};

export default ChatGptCardDropdown;

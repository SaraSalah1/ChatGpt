import CloseIcon from "@mui/icons-material/Close";


const LoginSignupCard = ({ onClose }) => {
  const links = [
    { icon: "Google__G__logo.png", text: "Continue with Google" },
    { icon: "Apple_logo.png", text: "Continue with Apple" },
    { icon: "Microsoft_logo.png", text: "Continue with Microsoft" },
    { icon: "Phone_logo.png", text: "Continue with Phone" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/10 backdrop-blur-[2px] p-4">
      <div className="relative w-full max-w-md bg-white border border-gray-300 shadow-xl rounded-4xl p-6 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black hover:bg-gray-200 rounded-full p-1"
        >
          <CloseIcon />
        </button>

        <h1 className="font-semibold text-2xl mb-4 text-center">Log in or sign up</h1>

        <p className="text-center text-sm mb-6">
          You’ll get smarter responses and can upload files, images, and more.
        </p>

        <div className="flex flex-col gap-3 mb-6">
          {links.map((link, index) => (
            <button
              key={index}
              className="flex items-center justify-center gap-2 w-full bg-white text-black rounded-4xl px-6 py-3 border border-gray-300 hover:bg-gray-100"
            >
              <img src={`/src/assets/images/${link.icon}`} alt={link.text} className="w-5 h-5" />
              {link.text}
            </button>
          ))}
        </div>

        <div className="relative w-full my-4">
          <hr className="border-gray-300" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-700 font-semibold text-xs">
            OR
          </span>
        </div>

        <form className="flex flex-col gap-3 w-full">
          <input type="text" className="w-full px-6 py-3 rounded-4xl border border-gray-300 outline-none" placeholder="Email address" />
          <button className="w-full bg-black text-white px-6 py-3 rounded-4xl">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupCard;

import { useState } from "react";

const HelpList = () => {
  const [links, setLinks] = useState([
    { icon: "PlansAndPricing.png", text: "See plans and pricing" },
    { icon: "Settings.png", text: "Settings" },
    { icon: "Help.png", text: "Help center" },
    { icon: "Release_notes.png", text: "Release notes" },
    { icon: "TermsAndPolicies.png", text: "Terms & policies" },
  ]);

  return (
    <div>
      <div className="full-width">
        {links.map((link, index) => (
          <div key={index} className="p-2">
            <a href="/" className="w-full">
              <button className="hover:cursor-pointer hover:bg-[#f4f4f4] w-full element-center gap-2 bg-white text-black rounded-4xl px-6 py-1">
                <img
                  src={`/src/assets/images/${link.icon}`}
                  alt="icon"
                  className="w-5 h-5"
                />
                {link.text}
              </button>
            </a>

            {index === 1 && <hr className="border-gray-300 my-2" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpList;

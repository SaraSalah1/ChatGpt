
const Footer = () => {
  return (
    <div className=' w-full fixed bottom-0 left-0 z-50 element-center flex flex-col p-1 font-sans bg-white'>
        <p className='text-gray-500 text-center text-sm md:text-base font-sans'>
          By messaging ChatGPT, an AI chatbot, you agree to our {" "}
          <a href="/" className="underline text-black hover:text-gray-700">Terms</a> {" "}
           and have read our {" "} <a className="underline text-black hover:text-gray-700" href="/"> {" "} Privacy Policy</a>.</p>
          
    </div>
  )
}
export default Footer
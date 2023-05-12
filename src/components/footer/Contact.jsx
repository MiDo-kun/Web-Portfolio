const Contact = () => {
  return (
    <div className="w-[350px] mt-4 tablet-md:mx-auto mobile-lg:w-full mobile-lg:my-1">
      <h3 className="text-2xl text-[#7F8AF0] font-bold font-poppins tracking-wider tablet-md:text-[1.4rem] pl-5 mobile-lg:pl-3 ">Contact Me</h3>
      <p className=" pl-6 mobile-lg:pl-4 mb-5 text-sm font-poppins text-gray-300">You can send a message via email here.</p>
      <form action="https://getform.io/f/0ef5432c-7885-4e5d-9c4f-c19f4d1b4f46" method="POST" className="text-white mx-auto w-[75%] mobile-sm:w-[80%]">
        <input type="text" name="name" id=""
          className="w-full mb-2 p-2 rounded-sm bg-[#161b22] border border-zinc-400 outline-none text-xs"
          placeholder="Full Name" required />
        <input type="email" name="email" id=""
          className="w-full mb-2 p-2 rounded-sm bg-[#161b22] border border-zinc-400 outline-none text-xs"
          placeholder="Email Address" required />
        <textarea name="message" id="" cols="10" rows="4"
          className="w-full mb-2 p-2 rounded-sm bg-[#161b22] border border-zinc-400 outline-none text-xs resize-none"
          placeholder="Message Here..." required></textarea>

        <button className="flex gap-2 mx-auto uppercase tracking-wider px-4 laptop-lg:mb-0 text-[#FF9000] hover:underline" type="submit">
          <span className="font-black font-poppins ">Send Message</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M1.987 2.953a2.546 2.546 0 0 1 2.816-.473l16.51 7.363a2.338 2.338 0 0 1 0 4.315L4.802 21.52a2.546 2.546 0 0 1-2.816-.473c-.69-.659-1.009-1.735-.458-2.767l3.152-5.904l.662.354l-.662-.354a.789.789 0 0 0 0-.752L1.53 5.72c-.55-1.031-.232-2.108.458-2.767Zm1.036 1.085c-.274.262-.36.62-.17.976l-.662.353l.661-.353l3.153 5.904c.363.68.363 1.485 0 2.165l-3.153 5.904c-.19.356-.103.714.171.976c.28.267.72.387 1.169.187l16.51-7.362c.73-.326.73-1.25 0-1.575L4.192 3.85a1.047 1.047 0 0 0-1.169.188Z" clipRule="evenodd" /></svg>
        </button>
      </form>
    </div>
  );
}

export default Contact;
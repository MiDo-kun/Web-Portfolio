import { useRef, useEffect } from "react";
import Typed from "typed.js";

const AboutMe = () => {
  const linkedInProfile = import.meta.env.VITE_LINKEDIN_PROFILE_LINK;
  const resume = import.meta.env.VITE_RESUME_LINK;
  const typeAnimation = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'A Self-Taught Web Developer',
      ],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 4000,
      startDelay: 1000,
      smartBackspace: true,
      cursorChar: '',
    };

    const typed = new Typed(typeAnimation.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about-me" className="flex pt-20 laptop-lg:pt-8 mobile-lg:pt-[3.2rem]">
      <div className="w-full">
        <h1
          className="text-[#7F8AF0] font-poppins font-black uppercase tracking-header text-4xl tablet-lg:tracking-[.3rem] tablet-md:tracking-[.2rem] mobile-lg:-ml-1 mobile-lg:text-4xl mobile-md:text-[1.79rem] mobile-sm:tracking-[.17rem] mobile-xs:text-2xl mobile-xs:tracking-[.15rem]">
          <span id="name">Jerson Dela Cerna</span>
        </h1>
        <h3 ref={typeAnimation}
          className="text-red-500 inline text-lg font-robotoMono tracking-widest mobile-lg:2xl mobile-md:text-base mobile-xs:text-sm">
        </h3>
        <p
          className="text-gray-200 tracking-wide pt-2 text-justify mr-5  before:absolute before:right-full before:top-2 mobile-lg:mr-2 text-base mobile-md:text-sm mobile-xs:text-xs">
          A web <span id="developer">developer</span> with knowledge in <span id="full-stack" className="whitespace-nowrap">full-stack</span> web development. As a <span id="freelancer">freelancer</span>, I've gained valuable <span id="aboutMe-experience">experience</span> in building web applications and <span id="collaborated">collaborated</span> with clients to deliver <span id="high-quality" className="whitespace-nowrap">high-quality</span> projects. I'm <span id="passionate">passionate</span>  about web development and always eager to take on new <span id="challenges">challenges</span> and <span id="learn">learn</span> new technologies. Let's work together to <span id="build">build</span> innovative web <span id="application" className="whitespace-nowrap">applications!</span></p>
        <div className="flex gap-[.9rem] mt-5 mobile-lg:mt-3">
          <a href={linkedInProfile} target="_blank" rel="noreferrer">
            <button
              className="flex items-center bg-transparent py-1 px-4 font-semibold border border-blue-500 hover:border-transparent rounded cursor-pointer hover:bg-blue-500 hover:text-white mobile-lg:text-sm mobile-xs:text-xs hover:transition hover:ease-in-out hover:delay-150 text-[#FF8000]">
              <svg className="mr-[.4rem]" xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 1000 1000"><path fill="currentColor" d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25H196.064zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854V384.193z" /></svg>
              LinkedIn
            </button>
          </a>
          <a href={resume} target="kblank">
            <button className="flex items-center bg-transparent  py-1 px-4 font-semibold border border-blue-500 hover:border-transparent rounded cursor-pointer hover:bg-blue-500 hover:text-white mobile-lg:text-sm mobile-xs:text-xs  hover:transition hover:ease-in-out hover:delay-150 text-[#FF8000]">
              <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12Z" /></svg>
              Resume
            </button>
          </a>
        </div>
      </div >
      <img src="./profile-pic.jpg" className="block grayscale-[80%] opacity-90 mr-10 w-[500px] h-[275px] rounded-sm tablet-lg:hidden landscape-tablet-md:hidden hover:grayscale-0"
        alt="Background Image" />
    </section >
  )
}

export default AboutMe;
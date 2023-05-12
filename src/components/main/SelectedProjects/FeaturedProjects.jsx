import Projects from './Projects';

const FeaturedProjects = () => {
  return (
    <section id="personal-projects" className="mt-8 pt-10 mobile-lg:-mt-8 mobile-lg:pt-14">
      <h2
        className="text-[1.6rem] font-poppins tracking-section text-[#7F8AF0] border-blue-400 border-l-8 pl-3 tablet-lg:text-2xl tablet-lg:border-none tablet-lg:pl-0 tablet-lg:-ml-1 mobile-lg:hidden">
        Selected Works
      </h2>
      <h2
        className="hidden mobile-lg:block text-[#7F8AF0] text-[1.7rem] font-bold font-mono mobile-md:text-[1.4rem] mobile-xs:text-xl ">
        Projects
      </h2>
      <h3
        className="hidden mobile-lg:block ml-[.1rem] text-gray-300 text-base mobile-lg:w-[95%] mobile-md:text-sm mobile-xs:text-xs text-justify">
        Notable projects that might be interesting to you.
      </h3>

      <div className="ml-3 tablet-md:w-[80%] tablet-md:ml-3 mobile-lg:w-[90%] mobile-lg:ml-4 mobile-sm:ml-3">
        <div className="mt-8 flex flex-col gap-7 mobile-lg:mt-3">
          <Projects />
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
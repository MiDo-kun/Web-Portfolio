import Experience from "../SkillsAndExperience/Experience";
import Skill from "./Skill";

const SkillsAndExperience = () => {
  return (
    <section className="mt-10 pt-8 tablet-lg:mt-2 mobile-lg:-mt-4 mobile-lg:pt-8">
      <h2
        className="text-[1.6rem] font-poppins tracking-section text-[#7F8AF0] border-l-8 pl-3 border-blue-300 tablet-lg:text-2xl tablet-lg:hidden ">
        Skills & Experience
      </h2>
      <div className="w-[94%] mx-auto grid grid-cols-2 mt-7 mb-6 ml-4  tablet-lg:grid-cols-1 tablet-lg:ml-0">
        <Skill />
        <Experience />
      </div>
    </section>
  );
}

export default SkillsAndExperience;
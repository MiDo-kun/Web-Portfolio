import Tags from "../Tags";
import parse from 'html-react-parser'
import { useEffect, useState } from "react";

const Skill = () => {
  const [skillSets, setSkillSets] = useState([]);
  const GIST_ID = import.meta.env.VITE_GIST_ID;

  useEffect(() => {
    fetch(`https://api.github.com/gists/${GIST_ID}`)
      .then(response => response.json())
      .then(async data => {
        const file = Object.values(data.files)[3]; // Retrieve the 3rd file in the gist
        const content = file.content;
        const json = JSON.parse(content);
        setSkillSets(json);
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <div>
      <h2 id="skills"
        className="hidden text-[#7F8AF0] text-[1.6rem] font-poppins tracking-section  border-white border-l-8 pl-3 mb-5 tablet-lg:pl-0 tablet-lg:border-none tablet-lg:-ml-1 tablet-lg:block mobile-lg:tracking-normal mobile-lg:-mt-10 mobile-lg:pt-14 mobile-lg:ml-0 mobile-lg:mb-0 mobile-lg:text-[1.7rem] mobile-lg:pl-0 mobile-lg:border-l-0 mobile-lg:font-bold mobile-lg:font-mono mobile-md:text-[1.4rem] mobile-xs:text-xl">
        Skills
      </h2>
      <h3
        className="hidden mobile-lg:block ml-[.14rem] text-gray-300 text-base mobile-md:text-sm mobile-xs:text-xs text-left">
          A list of my technical skill sets in building web applications.
      </h3>

      <div className="w-[89%] pl-5 mobile-lg:pl-2 mobile-lg:mt-4 mobile-lg:pr-1 mobile-lg:w-[100%]">
        {skillSets.map((skill, index) => {
          return (
            <div key={index} className="mb-7 mobile-lg:mb-5">
              <h3 className="flex items-center text-amber-300 text-xl tracking-wider">
                {parse(skill.icon)} <span className="font-poppins text-[1.2rem] mobile-md:text-[1rem] mobile-xs:text-[.9rem]">{skill.name}</span>
              </h3>
              <div className="mt-2 flex flex-wrap mobile-md:mt-1">
                {skill.languages.map((language, index) => {
                  return (
                    <Tags key={index} language={language} />
                  )
                })}
              </div>
              <p className=" text-gray-200 font-poppins text-base mobile-md:text-sm mobile-xs:text-xs text-left">
                {parse(skill.description)}
              </p>
            </div>)
        })}
      </div>
    </ div>
  )
}

export default Skill;
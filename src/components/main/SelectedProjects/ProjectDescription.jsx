import parse from 'html-react-parser';
import Tags from "../Tags";

const ProjectDescription = ({ index, project}) => {
  return (
    <div className={`${index == 1 ? 'ml-7' : 'mr-7'} py-2 rounded-sm mobile-lg:pt-1 tablet-lg:mr-0 tablet-lg:ml-0`}>
      <h3 className="font-robotoMono font-semibold text-[1.3rem] text-[#FF8000] -ml-[.115rem] mobile-md:text-[1.1rem] mobile-xs:text-base">
        {project.name}
      </h3>
      <p className="mt-1 text-gray-200 text-base mobile-md:text-sm mobile-xs:text-xs text-justify mobile-lg:mb-2">
        {parse(project.description)}
      </p>
      <div className="my-2 flex flex-wrap mobile-lg:pb-1 mobile-lg:my-0">
        {project.languages.map((language, index) => {
          return (<Tags key={index} language={language} />)
        })}
      </div>

      <div className="ml-[.2rem] flex gap-5 mobile-lg:ml-0">
        <span className="group text-blue-400 flex gap-2">
          <a href={project.project_link} target="_blank" rel="noreferrer" className="border-b-2 border-blue-500 group-hover:border-amber-400 group-hover:text-amber-400 mobile-md:text-sm mobile-xs:text-xs">Live Demo</a>
          <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-yellow-400" width="17" height="22" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" /></svg>
        </span>

        <span className="group text-blue-400 flex gap-2">
          <a href={project.repo_link} target="_blank" rel="noreferrer" className="border-b-2 border-blue-500  group-hover:border-amber-400 group-hover:text-amber-400 mobile-md:text-sm mobile-xs:text-xs">
            Source Code
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" className="group-hover:text-amber-400" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32ZM200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z" /></svg>
        </span>
      </div>
    </div >)
}

export default ProjectDescription;
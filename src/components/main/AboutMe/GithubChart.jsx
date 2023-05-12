import GithubCalendar from 'react-github-calendar';

const GithubChart = () => {
  const githubProfile = import.meta.env.VITE_GITHUB_PROFILE_LINK;
  const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;

  return (
    <section className="mt-12 mobile-lg:mt-10">
      <h2
        className="text-2xl pl-3 font-poppins text-[#7F8AF0] border-blue-300 tracking-section border-l-8 tablet-lg:pl-0 tablet-lg:-ml-1 tablet-lg:border-none mobile-lg:text-xl mobile-lg:font-medium mobile-lg:ml-0 mobile-lg:tracking-widest mobile-lg:border-none mobile-md:text-lg mobile-xs:text-base mobile-lg:text-yellow-400">
        Github Contribution
      </h2>
      <h3
        className="hidden mb-4 ml-[.09rem] mobile-lg:block text-gray-300 text-base mobile-md:text-sm mobile-xs:text-xs text-justify">
          Overview of my consistency in coding.
      </h3>
      <div className="w-[98%] mt-3 mobile-md:-mt-2">
        <div
          className="hidden text-base text-right text-blue-400 cursor-pointer mobile-lg:flex mobile-lg:justify-end  mobile-lg:text-sm mobile-xs:text-xs">
          <a href={githubProfile} target="_blank" className="mr-[.075rem] underline" rel="noreferrer">Github Profile</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 24 24" className='animate-icon'><path fill="currentColor" d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z" /></svg>
        </div>
        <div className="mt-5 mobile-lg:hidden border-none rounded-md w-full text-blue">
          <GithubCalendar username={githubUsername} color={"#0284C7"} />
        </div>
        <div id="github-contrib-mobile" className="hidden mobile-lg:block mx-auto overflow-auto bg-white p-2 rounded-sm" >
          <img src={`https://ghchart.rshah.org/196127/${githubUsername}`} alt="Github Chart"
            className="mx-auto w-[90%] mobile-lg:w-auto mobile-lg:max-w-[630px] mobile-xs:max-w-[500px]" />
        </div>
      </div>
    </section >
  )
}

export default GithubChart;
const Languages = ({ language }) => {
  return (
    <span
      className="font-base whitespace-nowrap py-[.07rem] pr-2 mb-1 text-red-500 mr-1 text-sm mobile-md:text-[.82rem] mobile-xs:text-[.7rem]">
      <span className="mr-[.08rem]">#</span>{language}
    </span>
  )
}

export default Languages;
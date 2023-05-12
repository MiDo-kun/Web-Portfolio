const NextBtn = ({experiences, totalPages, currentPage, setCurrentPage}) => {
  
  return (
    <div className='text-center'>
      {experiences.length >= 5 && Array.from({ length: totalPages }).map((_, index) => (
        <a key={index} href="#technical-skills">
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-1 rounded-full w-3 h-3 border ${index + 1 === currentPage ? 'bg-yellow-400' : 'border-gray-300'}`}
          ></button>
        </a>
      ))}
    </div>
  )
}

export default NextBtn;
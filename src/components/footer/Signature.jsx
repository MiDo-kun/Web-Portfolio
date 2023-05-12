const Signature = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="px-5 py-2 text-center text-sm text-gray-200 bg-slate-950 lg:text-xs">
      Designed and Developed by <span className="text-blue-400">Jerson</span>. <br className="hidden mobile-lg:block" /> All Rights Reserved &copy; <span className="text-blue-400">{currentYear}</span>
    </p>
  )
}


export default Signature;
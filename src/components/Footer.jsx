const Footer = () => {
  return (
    <div className="py-4 bg-[#0a0d13] text-white text-center lg:px-36">
      <div className="p-4 py-6 lg:py-8 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a className="flex justify-center items-center" href="">
            <span className="text-2xl font-semibold whitespace-normal">Portfolio</span></a>
        </div>
        <div className="flex gap-5 my-2 justify-center">
          <a className="hover:underline" href="https://github.com/gaaarrrgiiiiiiiiiii">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com/in/gargi-thapa-089767294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a>
        </div>
      </div>
      <hr />
      <span className="text-center"> &copy; GT </span>
      
    </div>
  )
}

export default Footer;
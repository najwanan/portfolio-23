//boilerplate for react component
const ProgramEquity = () => {
  return (
    <section className="py-10 bg-port-cream sm:py-16 lg:py-24 ">
      <div className="max-w-6xl px-4  sm:px-6 lg:px-8 ">
        <div className=" text-left md:max-w-lg lg:max-w-2xl md:text-left"> 
          <h2 className="text-3xl font-bold leading-tight p-4 rounded-xl text-port-cream bg-port-turquiose sm:text-4xl lg:text-5xl lg:leading-tight">
            Program Equity
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 p-4 bg-port-turquiose "></span>
              <span className="relative"> Pathways Future Etc </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Software Engineering Fellowship.</h3>
            <p className="mt-4 font-dmserif text-lg text-gray-700 
text-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <p className="mt-4 text-lg font-dmserif text-gray-700 
text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <h3 className="mt-8 text-lg font-semibold text-gray-900">Interested in Joining?</h3>
            <p className="mt-4 text-lg font-dmserif text-gray-700 
text-left">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div>
            <img className="w-full mx-auto sm:max-w-xs" src="https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBvcnRyYWl0JTIwb2YlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}


export default ProgramEquity;

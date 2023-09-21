//boilerplate for react component
import PECarousel from "./PECarousel";
import PESocialMedia from "./PESocialMedia";

const ProgramEquity = () => {
  return (
    <section id="learn" className="py-10 bg-port-cream sm:py-16 lg:py-24 ">
      <div className="max-w-6xl px-4  sm:px-6 lg:px-8 ">
        <div className=" text-left md:max-w-lg lg:max-w-2xl md:text-left"> 
          <h2 className="text-3xl font-bold leading-tight p-4 rounded-xl text-port-cream bg-port-black sm:text-4xl lg:text-5xl lg:leading-tight textShadow-default">
            Program Equity
          
              <h3 className="relative"> Software Engineering Fellowship </h3>
       
          </h2>
        </div>

        <div className="grid grid-row-2 lg:grid-cols-2 w-full  mt-8 md:mt-20 gap-y-6 gap-x-10">
          <div>
            <h3 className="text-lg text-left font-mono font-semibold text-gray-900">Helping the next generation of software engineers ship climate tech</h3>
            <p className="mt-4 font-dmserif text-lg  text-gray-700 
text-left">Program Equity provides open source mentorship through the software engineering fellowship with a goal of bridging the gap between bootcamp curriculum and enterprise architecture workflows .</p>
            <p className="mt-4 text-lg font-dmserif text-gray-700 
text-left"> Over the course of 12 weeks fellows get the opportunity to collaborate with a network of mentors that cover everything from security best practices to developer relations. Together our combined efforts maintain PE’s main product <span> <a className="text-bold underline"  target="_blank"
              rel="noreferrer" href="https://amplify-app-production.herokuapp.com/">Amplify,</a></span> a tool used to enable climate change policies. </p>

            <h3 className="mt-8 text-lg text-left font-mono font-semibold text-gray-900">Join Us</h3>
            <p className="mt-4 text-lg font-dmserif text-gray-700 
text-left">Applications are closed for the Fall 2023 Cohort. If you are interested in joining for a future cohort as a mentor or fellow, check out this <span><a className="cursor-pointer underline"href="https://programequity.notion.site/ProgramEquity-Open-Source-Fellows-5f4dfc06109842779b81e8166c056334" target="_blank" rel="noreferrer">page.</a></span></p>
            
            {/* <h3 className="mt-8 text-lg text-left font-mono font-semibold text-gray-900">Connect with Us:</h3> */}
            <p className="text-left">
              <PESocialMedia/>
            </p>
          
          </div>

          <div className="md:ml-32 justify-center items-center">
            <PECarousel/>
          
          </div>
        </div>
      </div>
    </section>
  );
}


export default ProgramEquity;

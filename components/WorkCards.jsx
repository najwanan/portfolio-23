import DUImg from '../src/assets/DUImg.svg';
import RANDImg from '../src/assets/CAREP.svg';



export default function WorkCards() {
    return (
     <div className=" flex flex-col lg:flex-row space-y-8 md:space-x-8 items-center justify-center">
            {/* first card */}
    <div className=" w-4/5 lg:w-1/3 md:h-160 p-6 border border-port-turquiose rounded-lg shadow-lg">
    <div>
        <h3 className="text-lg font-regular  font-mono text-left text-port-black">Full Stack</h3>
        <h3 className="text-lg font-regular  font-mono text-left text-port-black">Product: DU Event Board</h3>
    <h1 className="text-2xl font-extrabold  font-poppins text-left  text-port-black">Data Umbrella</h1>
    </div>
    
    <div className="flex justify-center mb-8 h-40"> 
    <img src={DUImg} alt="Logo" className=""/>
    </div>  
                
      <p className="text-md text-port-black font-dmserif text-justify w-3/4 mt-8 mb-6">Data Umbrella is a focuses on providing educational resources and community support for data science and open-source initiatives. The data event board is a product that DU created for the community to organize events</p> 
     
          <div className="flex justify-left space-x-12 my-4">  
  
            <button
              className="bg-port-citron text-gray-700  px-4 py-2 rounded-md w-1/3"
              onClick={() => {
                const url = "https://github.com/data-umbrella/event-board-api";
                window.open(url, '_blank');
							}}> Code </button>
     
            <button
              className="bg-port-tangerine text-gray-700   px-4 py-2 rounded-md w-1/3"
              onClick={() => {
                const url = "https://events.dataumbrella.org/";
                window.open(url, '_blank');
							}}
            >Live Site</button>
       
         </div>
    </div>

    {/* /second card       */}
  <div className=" w-4/5 lg:w-1/3 md:h-160 p-6 border border-port-citron rounded-lg shadow-lg">
    <div>
        <h3 className="text-lg font-regular  font-mono text-left text-port-black">Front End</h3>
        <h3 className="text-lg font-regular  font-mono text-left text-port-black">Product: Website</h3>
    <h1 className="text-2xl font-extrabold  font-poppins text-left  text-port-black">RAND Center to Advance Racial Equity Policy</h1>
    </div>
    
    <div className="flex justify-center mb-8 h-40"> 
    <img src={RANDImg} alt="Logo" className=""/>
    </div>  
                
      <p className="text-md text-port-black font-dmserif text-justify w-3/4 mt-8 mb-6">Al unirte a nuestro programa de fidelización y tokenización de puntos, conseguirás obtener puntos con cada compra y canjearlos por descuentos exclusivos, regalos especiales o convertirlos en criptomonedas.</p> 
     
    <div className="flex justify-left space-x-12 my-4">       
            <button className="bg-port-citron text-gray-700  px-4 py-2 rounded-md w-1/3"
             onClick={() => {
               const url = "https://github.com/specollective/spec-rand-project-site";
               window.open(url, '_blank');
							}}
            >  Code </button>
            <button className="bg-port-tangerine text-gray-700   px-4 py-2 rounded-md w-1/3"
              onClick={() => {
                const url = "https://carep.specollective.org/";
                window.open(url, '_blank');
							}}
            >Live Site</button>
    </div>
    </div>
            {/* /third card */}

    <div className=" w-4/5 lg:w-1/3 md:h-160 p-6 border border-port-magenta rounded-lg shadow-lg">
    <div>
        <h3 className="text-lg font-regular  font-mono text-left text-port-black">Front End</h3>
        <h3 className="text-lg font-regular  font-mono text-left text-port-black">Product: Insights Agent</h3>
    <h1 className="text-2xl font-extrabold  font-poppins text-left  text-port-black">Build Justly</h1>
    </div>
    
    <div className="flex justify-center mb-8 h-40"> 
    <img src={DUImg} alt="Logo" className=""/>
    </div>  
                
      <p className="text-md text-port-black font-dmserif text-justify w-3/4 mt-8 mb-6">Insight Agent is a project for Build Justly, An organization that  build tools, processes, programs, and research to further digital equity efforts and make technology building practice less exclusionary.</p> 
     
    <div className="flex justify-left space-x-12 my-4">       
        <button className="btn-glass bg-port-citron text-gray-700  px-4 py-2 rounded-md w-1/3">  Code </button>
        <button className="bg-port-tangerine text-gray-700   px-4 py-2 rounded-md w-1/3">Live Site</button>
    </div>
    </div>
            

  </div>


  
    )
}
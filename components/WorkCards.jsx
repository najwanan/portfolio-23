import DUImg from '../src/assets/DUImg.svg';
import RANDImg from '../src/assets/CAREP.svg';

export default function WorkCards() {
    return (
  <div className=" flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8 items-center justify-center">
    <div className=" w-4/5 md:w-1/3 md:h-160 p-6 bg-port-magenta rounded-lg shadow-lg">
    <div>
    <h3 className="text-lg font-regular  text-dmserif text-left text-port-white">Full Stack</h3>
    <h1 className="text-2xl font-bold  text-poppins text-left text-port-white">DATA UMBRELLA</h1>
    </div>
    
    <div className="flex justify-center mb-8 h-40"> 
    <img src={DUImg} alt="Logo" className=""/>
    </div>  
                
      <p className="text-sm text-port-white text-justify w-3/4 mt-8 mb-6">Al unirte a nuestro programa de fidelización y tokenización de puntos, conseguirás obtener puntos con cada compra y canjearlos por descuentos exclusivos, regalos especiales o convertirlos en criptomonedas.</p> 
     
    <div className="flex justify-center space-x-12 my-4">       
        <button className="bg-port-citron text-white px-4 py-2 rounded-md w-1/3">  Code </button>
        <button className="bg-port-tangerine text-white px-4 py-2 rounded-md w-1/3">Live Site</button>
    </div>
    </div>

    {/* /second card       */}
      <div className=" w-full md:w-1/3 md:h-160 p-6 bg-port-turquiose rounded-lg shadow-lg">
    <div>
    <h3 className="text-lg font-regular  text-dmserif text-left text-port-white">Front End</h3>
    <h1 className="text-2xl font-bold  text-poppins text-left text-port-white">RAND</h1>
    </div>
    
    <div className="flex justify-center mb-8 h-40 "> 
    <img src={RANDImg} alt="Logo" className=""/>
    </div>  
                
      <p className="text-sm text-port-white text-justify w-3/4 mt-8 mb-6">Al unirte a nuestro programa de fidelización y tokenización de puntos, conseguirás obtener puntos con cada compra y canjearlos por descuentos exclusivos, regalos especiales o convertirlos en criptomonedas.</p> 
     
    <div className="flex justify-center space-x-12 my-4">       
        <button className="bg-port-citron text-white px-4 py-2 rounded-md w-1/3">  Code </button>
        <button className="bg-port-tangerine text-white px-4 py-2 rounded-md w-1/3">Live Site</button>
    </div>
    </div>
  </div>


  
    )
}
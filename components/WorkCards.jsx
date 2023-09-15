
export default function WorkCards() {
    return (
  <div className="min-h-screen flex space-x-8 items-center justify-center">
    <div className="max-w-md w-full p-6 bg-port-black rounded-lg shadow-lg">
    <h3 className="text-lg font-regular  text-dmserif text-left text-port-white mt-8 mb-6">Full Stack</h3>
    <h1 className="text-2xl font-bold  text-poppins text-left text-port-white mt-8 mb-6">DATA UMBRELLA</h1>
       <div className="flex justify-center mb-8"> 
        <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-30 h-20"/>
      </div>          
      <p className="text-sm text-port-white text-justify w-3/4 mt-8 mb-6">Al unirte a nuestro programa de fidelización y tokenización de puntos, conseguirás obtener puntos con cada compra y canjearlos por descuentos exclusivos, regalos especiales o convertirlos en criptomonedas.</p> 
     
    <div className="flex justify-center space-x-12 my-4">       
        <button className="bg-port-citron text-white px-4 py-2 rounded-md w-1/3">  Code </button>
        <button className="bg-port-tangerine text-white px-4 py-2 rounded-md w-1/3">Live Site</button>
    </div>
            </div>

    {/* /second card       */}
    <div className="max-w-md w-full p-6 bg-port-turquiose rounded-lg shadow-lg">
    <h3 className="text-lg font-regular  text-dmserif text-left text-port-white mt-8 mb-6">Full Stack</h3>
    <h1 className="text-2xl font-bold  text-poppins text-left text-port-white mt-8 mb-6">DATA UMBRELLA</h1>
       <div className="flex justify-center mb-8"> 
        <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-30 h-20"/>
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
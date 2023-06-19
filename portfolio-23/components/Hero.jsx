export default function Hero() {
    return (
//create a component called Hero with vertical divs that run the full height of the page
        <div>
            <section className="flex flex-row">
                <div className="flex flex-col h-screen w-1/5 justify-center items-center bg-port-citron border-solid border-black" />
                
                <div className="flex flex-col h-screen w-1/5 justify-center items-center bg-port-tangerine" />
               
                <div className="flex flex-col h-screen  w-1/5 justify-center items-center bg-port-sunset" />
              
                <div className="flex flex-col h-screen w-1/5 justify-center items-center bg-port-poppy" />
                 
                <div className="flex flex-col h-screen w-1/5 justify-center items-center bg-port-turquiose" />
                  
            </section>
 
    </div>
    )
}
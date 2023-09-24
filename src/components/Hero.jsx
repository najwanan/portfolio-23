import TypeWriterEffect from 'react-typewriter-effect';


export default function Hero() {
    return (
//create a component called Hero with vertical divs that run the full height of the page
        <div className="w-full">
            <section className="hidden md:flex flex-row z-0">
                {/* <div className="flex flex-col h-screen w-1/10 justify-center items-center bg-port-citron border-solid border-black" /> */}
                <div className="flex flex-col h-screen w-1/6 justify-center items-center bg-port-turquiose" />
                <div className="flex flex-col h-screen w-1/6 justify-center items-center bg-port-magenta" />
                
                <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-poppy" />

                  <div className="flex flex-col h-screen  w-1/12 justify-center items-center bg-port-sunset" />
                <div className="flex flex-col h-screen w-1/6 justify-center items-center bg-port-tangerine" />
                <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-citron border-solid border-black" />
                
                <div className="flex flex-col h-screen w-1/6 justify-center items-center bg-port-turquiose" />
                
                  <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-citron border-solid border-black" />
                
                <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-tangerine" />
               
                <div className="flex flex-col h-screen  w-1/12 justify-center items-center bg-port-sunset" />
              
                <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-poppy" />
                 <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-magenta" />
                 
        </section>

        <div className="z-10 bg-transparent absolute top-1/2 left-0 w-full">
         <h1 className="z-10 font-poppins text-3xl md:text-6xl p-8 font-medium text-port-cream">Najwana N.</h1>
        </div>

         <div className="z-10 bg-port-black opacity-100 p-4 flex justify-center absolute rounded-md border-port-black border-2 opacity-85 top-2/3 left-1/4 w-1/2">
         <TypeWriterEffect
        textStyle={{
          fontFamily: 'Poppins',
          color: '#FEFAE0',
          fontWeight: 300,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#FEFAE0"
        multiText={[
          `Hey there! Thanks for stopping by`,
          `Here's everything that I've been up to lately`


        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={100}
      />
      </div> 
    
        
         <section className="flex w-full md:hidden ">
                {/* <div className="flex flex-col h-screen w-1/10 justify-center items-center bg-port-citron border-solid border-black" /> */}
                <div className="flex flex-col h-screen w-1/6 justify-center items-center bg-port-turquiose" />
                <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-magenta" />
                
                <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-poppy" />

                  <div className="flex flex-col h-screen  w-1/12 justify-center items-center bg-port-sunset" />
                <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-tangerine" />
          <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-citron border-solid border-black" />
          <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-turquiose" />
                <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-magenta" />
                
                <div className="flex flex-col h-screen w-1/12 justify-center items-center bg-port-poppy" />

                  <div className="flex flex-col h-screen  w-1/6 justify-center items-center bg-port-sunset" />
            </section>
 
    </div>
    )
}
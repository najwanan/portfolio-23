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
         <h1 className="z-10 font-poppins sm:text-3xl md:text-6xl p-8 text-bold  text-port-cream">Najwana Nashmin</h1>
        </div>

         <div className="z-10 bg-transparent md:ml-36 absolute top-3/4 w-1/2">
         <TypeWriterEffect
        textStyle={{
          fontFamily: 'Poppins',
          color: '#FEFAE0',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#FEFAE0"
        multiText={[
          `Hey there I&aposm a software engineer`,

        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
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

                  <div className="flex flex-col h-screen  w-1/12 justify-center items-center bg-port-sunset" />
            </section>
 
    </div>
    )
}
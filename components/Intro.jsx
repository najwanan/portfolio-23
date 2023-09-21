
import WorkHistoryTab from "./WorkHistoryTab"
import SocialMedia from './SocialMedia'


function Bio() {
  return (

     <section className="bg-port-cream">

    <div id="intro"className="h-screen w-screen justify-center bg-port-cream">
   
        <div className="flex justify-left ">
        <h1 className="ml-20 mt-12 text-7xl font-extrabold text-poppins text-black">Intro</h1>
        <SocialMedia />
        </div>
      <div className="grid md:grid-cols-2 mt-20 m-10 ">
        <div className="bg-port-citron z-0">
            <p className="text-xl text-left break-normal font-mono font-medium p-10 leading-loose ">
              Now this is the story all about how 
              <br/>I flipped my career, turned upside down 
              <br/> And I’d like to take a minute, just sit right there
               <br/> I’ll tell you how I became a software engineer 
          </p>
        </div>
        <div className="">
        
        </div>
          
        </div>
       
         <div className="grid md:grid-cols-2  m-10">
    
        <div className="">
         
        </div>

            <div className="bg-port-poppy shadow-md shadow-orange-400 z-10 -ml-20 -mt-20">
            <p className="text-xl text-left break-normal font-mono font-medium p-10 leading-loose ">
              Now this is the story all about how 
              <br/>I flipped my career, turned upside down 
              <br/> And I’d like to take a minute, just sit right there
               <br/> I’ll tell you how I became a software engineer 
          </p>
          </div>
      
        </div>
        
    </div>
     
      <WorkHistoryTab/>
    </section>

   
    
 
  )
}

export default Bio



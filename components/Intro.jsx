
import WorkHistoryTab from "./WorkHistoryTab"
import SocialMedia from './SocialMedia'


function Bio() {
  return (

     
    <div id="intro"className="h-screen w-screen justify-center bg-port-cream">
   
        <div className="flex justify-left ">
        <h1 className="ml-20 mt-12 text-7xl font-extrabold text-poppins text-black">Intro</h1>
        <SocialMedia />
        </div>
      <div className="grid md:grid-cols-2 mt-20 ">
        <div className="bg-port-citron">
            <p className="text-xl text-left break-normal font-mono font-medium p-10 leading-loose ">
              Now this is the story all about how 
              <br/>I flipped my career, turned upside down 
              <br/> And I’d like to take a minute, just sit right there
               <br/> I’ll tell you how I became a software engineer 
          </p>
        </div>
        <div className="">
           <WorkHistoryTab />
        </div>
          
        </div>
       
       
        
       
       
    </div>
  )
}

export default Bio



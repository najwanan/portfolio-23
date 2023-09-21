
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
            <p className=" text-md md:text-xl text-left break-normal font-mono font-medium p-8 leading-loose ">
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

            <div className="bg-port-poppy shadow-md shadow-yellow-900 z-10 md:-ml-20 md:-mt-20">
            <p className="text-md md:text-xl text-left break-normal font-mono font-medium p-10 leading-loose ">
              After years of supporting tech products in big tech as a program manager, I decided I wanted to be able to build products myself. I've dedicated the past half decade to that, honing the skillset necessary to become a technologist and using that skillset to partner with organizations and individuals working to create a more inclusive, sustainable, and equitable tech industry.
    
          </p>
          </div>
      
        </div>



         <div className="grid md:grid-cols-2 md:ml-36">
    

            <div className="bg-port-citron shadow-md  shadow-yellow-900 z-10 md:-ml-20 md:-mt-20">
            <p className="text-md md:text-xl text-left break-normal font-mono font-medium pt-10 pl-10 leading-loose ">
              Some of the highlights are:
            </p>
            <ul className="text-left w-full p-8 list-disc list-inside font-mono">
              <li>
                Joined an open source project partnered with GitHub and leveraged those resources to cofound a software enginering fellowship 
              </li>
              <li>
                 and part of the 100Devs community and Mentor Mesh
              </li>
              <li>
                Support female identifying business leaders and founders. Brand Ambassdor for Tribaja
              </li>
            </ul>
          </div>
      
          
        <div className="">
         
        </div>
        </div>
        
    </div>
     
      <WorkHistoryTab/>
    </section>

   
    
 
  )
}

export default Bio



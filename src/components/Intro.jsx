
// import WorkHistoryTab from "./WorkHistoryTab"
import SocialMedia from './SocialMedia'
// import AmazonLogo from '../src/assets/Amazon.svg'
// import MicrosoftLogo from '../src/assets/Microsoft.svg'


function Bio() {
  return (

     <section className="bg-port-cream">

    <div id="intro"className=" w-screen justify-center bg-port-cream z-10">
   
        <div className="flex flex-col md:flex-row md:justify-left ">
        <h1 className="md:ml-20 mt-12 text-5xl md:text-7xl font-extrabold text-poppins text-black">Intro</h1>
        <SocialMedia />
        </div>
      <div className="grid md:grid-cols-2 mt-20 m-10 ">
        <div className="bg-port-citron z-0 shadow-md shadow-yellow-900">
            <p className=" text-md md:text-lg text-left break-normal font-mono font-medium p-8 leading-loose ">
              Now this is the story all about how 
              <br/>I flipped my career, turned upside down 
              <br/> And I&apos;d like to take a minute, just sit right there
              <br/> I&apos;ll tell you how I became a software engineer 
          </p>
        </div>
        <div className="">
        
        </div>
          
        </div>
       
         <div className="grid md:grid-cols-2  m-10">
    
        <div className="">
         
        </div>

            <div className="bg-port-poppy shadow-md shadow-yellow-900 z-10 p-10 md:-ml-20 md:-mt-20">
            <p className="text-md md:text-lg text-left break-normal font-mono font-medium  leading-loose ">
              After years of supporting tech products at organizations like Amazon and Microsoft as a program manager, I decided I wanted to be able to build products myself. <br />
              <br/>
              I&apos;ve dedicated the past half decade to just that, honing the skillset necessary to become a technologist. I use this skillset to partner with organizations and individuals working to create a more inclusive, sustainable, and equitable tech industry.
    
          </p>
          </div>
      
        </div>



         <div className="grid md:grid-cols-2 md:ml-36">
    

            <div className="bg-port-citron shadow-md  shadow-yellow-900 z-10 md:-ml-20 md:-mt-20">
            <p className="text-md md:text-lg text-left break-normal font-mono font-medium pt-10 pl-10 leading-loose ">
              Some highlights from my journey:
            </p>
            <ul className="text-left w-full p-8 list-disc list-inside font-mono">
              <li className='p-4'>
                     Joined an open source project partnered with GitHub. Leveraged those resources to co-found a <a className="text-bold text-port-turquiose" href="#learn">software engineering fellowship</a> dedicated to providing professional development and opportunities to engineers from underrepresented groups and/or non-traditional training.
              </li>
              <li className='p-4'>
                     Gain and share knowledge with tech communities like <a className="text-bold text-port-turquiose" href="https://100devs.org/" target="_blank" rel="noopener noreferrer"> 100 Devs </a>community and <a className="text-bold text-port-turquiose" href="https://circle.mentormesh.io" target="_blank" rel="noopener noreferrer"> Mentor Mesh, </a>dedicated to all forms of diversity. Volunteer time to coordinate hackathons, weekly open source <a className="text-bold text-port-turquiose" href="https://www.youtube.com/playlist?list=PLBKcU7Ik-ir9_x3oIQWoTg7OF6LURrHf7" target="_blank" rel="noopener noreferrer">teaching sessions </a> and mentorship.
              </li>
              <li className='p-4'>
                    Support both allies and female identifying business leaders with their change initiatives for the tech industry . For example serving as a brand ambassador for <a className="text-bold text-port-turquiose" href="https://www.linkedin.com/company/tribaja/about/" target="_blank" rel="noopener noreferrer"> Tribaja.</a>
              </li>
               {/* <li className='p-4'>
                   Sometimes I get to build cool things with my friends and bring people along to learn. I&apos;m currently part of the team <a className="text-bold text-port-turquiose" href="https://www.linkedin.com/feed/update/urn:li:activity:7098676443542421504/" target="_blank" rel="noopener noreferrer">building products in public</a>  for Mentor Mesh.
              </li> */}

            </ul>
          </div>
      
          
        <div className="">
         
        </div>
        </div>
        
    </div>
{/*      
      <WorkHistoryTab/> */}
    </section>

   
    
 
  )
}

export default Bio



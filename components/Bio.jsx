
import WorkHistoryTab from "./WorkHistoryTab"
import SocialMedia from './SocialMedia'


function Bio() {
  return (

     
    <div className="h-screen w-screen justify-center bg-port-cream">
       <div className="py-4">
        <div className="justify-left mt-4 text-7xl font-extrabold text-poppins text-black">
          <h1>Intro</h1> <SocialMedia/>
        </div>
        <p className="text-xl font-mono font-medium">
              `Hi I&aposm Najwana. I am a engineer, teacher, DE&I advocate.` 
        </p>
        </div>
          <WorkHistoryTab />
    </div>
  )
}

export default Bio



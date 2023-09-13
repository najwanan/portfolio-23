
import './App.css';
import ProjectTile from "../components/ProjectTile.jsx";


function App() {
  return (
    <div className="projects">
      <div className="row">
        <ProjectTile  title="Project 1" className="bg-port-tangerine" />
        <ProjectTile  title="Project 2" className="bg-port-turquiose"/>
      </div>
      <div className="row">
        <ProjectTile  title="Project 3" className="bg-port-sunset"/>
        <ProjectTile  title="Project 4" className="bg-port-citron"/>
      </div>
    </div>
  );
}





// function App() {
  
//   return (
//     <>
//         <h1 className="text-3xl underline font-poppins font-semibold text-port-magenta ">Naj&apos;s Portfolio</h1>
//       <div className="flex h-screen w-screen bg-port-poppy">
//         {/* //divide this div into four squares that will hold a project each with a seperate background image */}
        
//         <div className="flex flex-col h-1/2 w-1/2 bg-port-tangerine">
//           <h1 className="text-3xl underline font-poppins font-semibold text-port-tangerine ">Project 1</h1>
//         </div>
//         <div className="flex flex-col h-1/2 w-1/2 bg-port-turquiose">
//           <h1 className="text-3xl underline font-poppins font-semibold text-port-tangerine ">Project 2</h1>
//         </div>
//         <div className="flex flex-col h-1/2 w-1/2 bg-port-sunset">
//           <h1 className="text-3xl underline font-poppins font-semibold text-port-tangerine ">Project 3</h1>
//         </div>
//         <div className="flex flex-col h-1/2 w-1/2 bg-port-citron">
//           <h1 className="text-3xl underline font-poppins font-semibold text-port-tangerine ">Project 4</h1>
//         </div>
//       </div>
  
    
    
//     </>
//   )
// }

export default App

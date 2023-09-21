

//boiler template for react component
const Header = () => {
    return (
        <div className="flex bg-transparent absolute top-0 left-0 w-full h-50 justify-end">
            <div className="hidden md:flex flex-row space-x-1 mr-12 ">
                <a href="#intro"
                ><h1 className="font-mono text-port-cream font-extralight text-3xl p-6" >About</h1></a>
                <a href="#Work">
                     <h1 className="font-mono  text-port-cream font-extralight text-3xl  p-6">Work</h1>
                </a>
                <a href="#learn">
                    <h1 className="font-mono text-port-cream font-extralight text-3xl  p-6">Learn</h1>
                </a>
           
           
            <h1 className="font-mono text-port-cream font-extralight text-3xl  p-6">Contact</h1>
        </div>
          
        </div>
    );
}

export default Header;
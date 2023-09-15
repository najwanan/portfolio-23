
//boiler template for react component
const Header = () => {
    return (
        <div className="flex bg-transparent absolute top-0 left-0 w-full h-50 justify-end">
            <div className="flex flex-row space-x-1 mr-12 ">
            <h1 className="font-mono text-yellow-300 text-3xl p-6">About</h1>
            <h1 className="font-mono text-yellow-300 text-3xl  p-6">Work</h1>
                <h1 className="font-mono text-yellow-300 text-3xl  p-6">Learn</h1>
                <h1 className="font-mono text-yellow-300 text-3xl  p-6">Contact</h1>
        </div>
          
        </div>
    );
}

export default Header;
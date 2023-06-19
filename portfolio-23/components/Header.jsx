
//boiler template for react component
const Header = () => {
    return (
        <div className="flex w-full h-50 justify-end">
            <div className="flex flex-row space-x-16">
            <h1 className="text-yellow-300 text-3xl">About</h1>
            <h1 className="text-yellow-300 text-3xl">Work</h1>
            <h1 className="text-yellow-300 text-3xl">Blog</h1>
            </div>
          
        </div>
    );
}

export default Header;
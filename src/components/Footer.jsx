import MeditationLogo from '../assets/Meditation.svg'
import CodeLogo from '../assets/Code.svg'
import CopybookLogo from '../assets/Copybook.svg'
import SeahawksLogo from '../assets/SeattleSeahawks.svg'

export default function Footer() {
    return (
     
    <footer className="w-full text-gray-700 bg-port-tangerine body-font">
        <div
            className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                   
                </a>
                <h1 className="mt-2 text-2xl font-mono text-port-black">Currently:</h1>
                <div className="mt-4">
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                            {/* link to social */}
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                           {/* link to social */}
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                               {/* link to social */}
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            {/* link to social */}
                        </a>
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-poppins font-medium tracking-widest text-gray-900 uppercase title-font">Creating Community in my hometown of Seattle</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3 flex justify-center">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                                    <img
                                        className=" "
                                        src={SeahawksLogo}
                                        alt="github-logo"
                                        width={100}
                                       height={100}
                                    />
                           </a>
                        </li>
                        
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium font-poppins  tracking-widest text-gray-900 uppercase title-font">Practicing Yoga & <br/>mindfulness</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3 flex justify-center">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                                       <img
                                        className=" "
                                        src={MeditationLogo}
                                        alt="github-logo"
                                        width={100}
                                       height={100}
                                    />
                                </a>
                        </li>
                       
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium  font-poppins tracking-widest text-gray-900 uppercase title-font">Making a to do list <br/> for 2024
                    </h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3 flex justify-center">
                             
                                     <img
                                        className=" "
                                        src={CopybookLogo}
                                        alt="github-logo"
                                       width={75}
                                    height={75}
                                />
                                  
                                
                        </li>
                      
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium font-poppins tracking-widest text-gray-900 uppercase title-font">Building an App <br/> for Mentor Mesh</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3 flex justify-center">
                                
                                     <img
                                        className=" "
                                        src={CodeLogo}
                                        alt="github-logo"
                                        width={75}
                                        height={75}
                                    />
                             
                        </li>
                      
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-port-black">
            <div className="container px-5 py-4 mx-auto">
                <p className="text-sm text-port-cream capitalize xl:text-center">Made with 100% Grit by Najwana N</p>
            </div>
        </div>
    </footer>

    )
}




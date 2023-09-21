import DevToLogo from '../src/assets/devTo.svg'
import LinkedinLogo from '../src/assets/LinkedIn.svg'
import GithubLogo from '../src/assets/GitHub.svg'
import WebLogo from '../src/assets/Internet.svg'
// import Image from 'next/image'

function PESocialMedia () {
    return (
        <div>
            <div className=" flex flex-row space-x-4 mt-8 justify-left">
            <a
              href="https://github.com/ProgramEquity"
              target="_blank"
              rel="noreferrer"
              className="pl-1"
            >
            <img
              className=" "
              src={GithubLogo}
              alt="github-logo"
              width={35}
              height={33}
             
            />
          </a>
          <a
            href="https://www.linkedin.com/company/programequity/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="pl-1"
          >
            <img
              className=" "
              src={LinkedinLogo}
              alt="linkedin-logo"
              width={35}
              height={33}
             
            />
          </a>
          <a
            href="https://dev.to/programequity"
            target="_blank"
            rel="noreferrer"
            className="pl-1"
          >    
            <img
              className="float-right"
              src={DevToLogo}
              alt="facebook-logo"
              width={35}
              height={33}
             
            />
          </a> 
          <a
            href="https://programequity.notion.site/ProgramEquity-Open-Source-Fellows-5f4dfc06109842779b81e8166c056334"
            target="_blank"
            rel="noreferrer"
            className="pl-1"
          >    
            <img
              className="float-right"
              src={WebLogo}
              alt="facebook-logo"
              width={35}
              height={33}
             
            />
          </a> 
         
            </div>    
        </div>
    )
}

//export the component
export default PESocialMedia
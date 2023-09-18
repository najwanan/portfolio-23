import DevToLogo from '../src/assets/devTo.svg'
import LinkedinLogo from '../src/assets/LinkedIn.svg'
import GithubLogo from '../src/assets/GitHub.svg'
// import Image from 'next/image'

function PESocialMedia () {
    return (
        <div>
            <div className=" flex flex-row space-x-4 mt-8 justify-center">
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
         
            </div>    
        </div>
    )
}

//export the component
export default PESocialMedia
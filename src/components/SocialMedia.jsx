import InstagramLogo from '../src/assets/Instagram.svg'
import LinkedinLogo from '../src/assets/LinkedIn.svg'
import GithubLogo from '../src/assets/GitHub.svg'
// import Image from 'next/image'

function PESocialMedia () {
    return (
        <div>
            <div className=" flex flex-rowspace-x-4 px-4 mt-6 md:mt-20 md:ml-12 justify-center">
            <a
              href="https://github.com/najwanan"
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
            href="https://www.linkedin.com/in/nnashmin/"
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
            href="https://www.instagram.com/theunnamedrd/"
            target="_blank"
            rel="noreferrer"
            className="pl-1"
          >    
            <img
              className="float-right"
              src={InstagramLogo}
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
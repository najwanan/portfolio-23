import AmazonLogo from '../assets/Amazon.svg'
export default function WorkHistoryTab() {
 return (
   <div className="join join-vertical w-1/2 z-30 border-2 rounded-none bg-port-turquiose border-gray-900">
   
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
       <div className="collapse-title text-xl font-medium">
         
         <div className='flex content-center'>
             Microsoft
            <img
              className=" "
              src={AmazonLogo}
              alt="github-logo"
              width={35}
              height={33}
            />
         </div>
       
       
    </div>
    <div className="collapse-content"> 
      <p>elementum. Vestibulum platea nulla vitae sem nam pellentesque tristique maecenas. Venenatis nunc ac suspendisse vel.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Amazon
    </div>
    <div className="collapse-content"> 
      <p>elementum. Vestibulum platea nulla vitae sem nam pellentesque tristique maecenas. Venenatis nunc ac suspendisse vel.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
     Microsoft
    </div>
    <div className="collapse-content"> 
      <p>elementum. Vestibulum platea nulla vitae sem nam pellentesque tristique maecenas. Venenatis nunc ac suspendisse vel.</p>
    </div>
  </div>
  
</div>
 )
}
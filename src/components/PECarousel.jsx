
import Card1 from '../assets/Card1.svg'
import Card2 from '../assets/Card2.svg'
import Card3 from '../assets/Card3.svg'
import Card4 from '../assets/Card4.svg'
import Card5 from '../assets/Card5.svg'
import Card6 from '../assets/Card6.svg'


export default function PECarousel() {
    return (
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1570358934836-6802981e481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={Card1} className="rounded-box" /> 
  </div> 
  <div className="carousel-item">
    <img src={Card2} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={Card3} className="rounded-box" />
    </div> 
     <div className="carousel-item">
 <img src={Card4} className="rounded-box" />
  </div>          
      <div className="carousel-item">
 <img src={Card5} className="rounded-box" />
        </div> 
            <div className="carousel-item">
 <img src={Card6} className="rounded-box" />
  </div> 
</div>
        
    )
}
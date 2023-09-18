import CarouselCard1 from '../src/assets/CarouselCard1.svg'


export default function PECarousel() {
    return (
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1570358934836-6802981e481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={CarouselCard1} className="rounded-box" /> 
  </div> 
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1570358934836-6802981e481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1570358934836-6802981e481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" className="rounded-box" />
  </div> 
  
</div>
        
    )
}
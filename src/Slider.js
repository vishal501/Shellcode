import { useEffect, useState, useRef } from 'react';
import './Slider.css';
const Slider = () =>{

    const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;
    return(
        <>
        <div className="container">
      
      <div className="carousel" ref={carousel}> 
        {data.map((item) => {
          const { id, name, oldPrice, image } = item;
          return (
              <div className="item" key={id}>
                  <div className="box">
                  <img src={image} alt={name} style={{float: "left"}}/>
                  <span className="name">{name}</span>
                  <div className="stars"><i class="fa fa-star" aria-hidden="true"><i class="fa fa-star" aria-hidden="true"><i class="fa fa-star" aria-hidden="true"><i class="fa fa-star" aria-hidden="true"><i class="fa fa-star" aria-hidden="true"></i></i></i></i></i>
                  <br/><br/><br/>
                  
                  </div>
                  <div className="description">{oldPrice}</div>
                  
                  </div>
              </div>
            
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
        </>
    );
}
export default Slider;
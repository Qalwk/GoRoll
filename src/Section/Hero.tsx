import React from 'react'

const Hero = () => {
  return (
    <div className='raw'>
      <div className="promo">
        <h1>Прямой рекламодатель <span>iGaming</span> с высокими ставками</h1>
        <div className="promo__text">
            <span> и локализацией</span> <span>для вашего гео</span>
        </div>
        <a href="#" className="promo__btn">Стать партнером</a>
      </div>
      
      <div className="laptops">
        <img className="laptop" src="laptop.png" alt="background" />
        <img className="laptop_m" src="laptop_m.png" alt="background" />
      </div>
    </div>
  )
}

export default Hero

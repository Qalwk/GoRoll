import React from 'react'

const Providers = () => {
  return (
    <div>
      <div className="providers" id="geo">
      <div className="providers__raw">
        <div className="p55">
          {/* <img src="img/55.jpg" alt="providers"> */}
          <h2>55+</h2>
          <span>Провайдеров</span>
        </div>
        <div className="providers__group">
          <img src="1.png" alt="pragmatic play" />
          <img src="2.png" alt="wazdan" />
          <img src="3.png" alt="smart soft" />
          <img src="4.png" alt="habanero" />
          +
        </div>
        <div className="ours">Наши гео</div>
        <div className="providers__country">
          <p>Austria, Switzerland, Germany, Italy, Slovakia,</p>
          <p>Slovenia, Portugal, Denmark, Finland, Sweden, Norway, Poland</p>
        </div>
        <a href="#" className="details">узнать подробнее</a>
        <a href="#" className="promo__btn">Стать партнером</a>
      </div>
    </div>
    </div>
  )
}

export default Providers

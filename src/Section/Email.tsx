import React from 'react'

const Email = () => {
  return (
    <div className="about">
      <h2 id="about">О нас <span>говорят</span></h2>
      <form action="post">
        <input type="email" placeholder="E-mail" required />
        <input type="tel" placeholder="Phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />

        <input type="submit" value="Связаться с нами" />
      </form>

      <div className="contacts">
        <span>Связаться с нами</span>
        <div className="smm">
          <a href="#!"><img src="f.svg" alt="fbook" /></a>
          <a href="#!"><img src="in.svg" alt="insta" /></a>
          <a href="#!"><img src="tg.svg" alt="telegram" /></a>
        </div>
      </div>
    </div>
  )
}

export default Email

import React from 'react';
import './GucatWebsite.css'; // Import CSS file if you have external styles


const GucatWebsite = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Gucat $GU Website</h1>
      </header>
      <div className="circle-image">
        <img src="gucat.jpg" alt="$GU" />
      </div>
      <div className="title">
        $GU
      </div>
      <div className="description">
        <p>It's over 9000 (billion) Market Cap soon! Power of a Saiyan Cat.</p>
      </div>
      <a href="https://pump.fun/HuGsuWqeXiBiuDb5ARAUJogTUeoCtatcbuovQJJnTzPK" className="buy-button" target="_blank" rel="noopener noreferrer">BUY $GU</a>
      <br />
      <br />
      <br />
      <img src="spiritbam.jpg" alt="spiritbam" />
      <footer>
        <div className="social-icons">
          <a href="https://x.com/gucat2024?s=21" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://boulderbugle.com/BTHWzwX1" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default GucatWebsite;

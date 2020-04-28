import React from 'react';
import './Home.css'

const Home = (props) => {
  return (
    <div className='home-container'>
      <section className='home-text-box'>
        <h2 className='home-text my-name-text'>My name is <span className='web-dev-text'>Ty</span></h2>
        <h2 className='home-text my-name-text'>and I'm a</h2>
        <h2 className='home-text web-dev-text'>WEB DEVELOPER!</h2>
      </section>
    </div>
  );
}

export default Home;
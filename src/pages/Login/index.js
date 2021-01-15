import React from 'react'
import mobile from '../../images/instagram_celular.png';
import logo from '../../images/logo.png';
import hero from '../../images/eder.jpeg';
import applestore from '../../images/applestore.svg';
import googlestore from '../../images/googlestore.png';
import './index.css';

const Home = () => {
  return (
    <div className='body'>
        <div className='instagram-wrapper'>
          <div className='instagram-phone'>
            <img src={mobile} alt='Instagram Phone'></img>
          </div>

          <div className='instagram-continue'>
            <div className='group'>
              <img className='instagram-logo' src={logo} alt='Logo'></img>
              <div className='profile-photo'>
                <img className='instagram-photo' src={hero} alt='Logo'></img>
              </div>
              <a href='#' className='instagram-login'>Continue as Eder Sena</a>
              <a href='#' className='instagram-logout'>Remove Account</a>
            </div>
            <div className='group'>
              <p className='not-account'>Not Eder Sena?</p>
              <p className='notaccount'>
                <span className='link-blue'>Switch Account or </span>
                <span className='link-blue'>Sign Up</span>
              </p>
            </div>
            <div className='get-the-app'>
              <p className='get-app'>Get the App!</p>
              <div className='download'>
                <img className='app-download' src={googlestore} alt='Logo'></img>
                <img className='app-download2' src={applestore} alt='Logo'></img>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home

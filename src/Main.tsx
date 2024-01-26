import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import rainbow from './public/rainbow.svg';
import field from './public/field.svg';
import parachuteBox from './public/parachute-box.svg';
import participate from './public/participate.svg';
import priority from './public/priority.svg';
import image_1 from './public/image-1.svg';
import image_2 from './public/image-2.svg';
import image_3 from './public/image-3.svg';
import './App.css';

function Main() {
  const [secondsLeft, setSecondsLeft] = useState(90);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft(prevSeconds => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="app">
      <div className="bg">

      </div>
      <div className='background'>
        <div className='rainbow'>
          <img src={rainbow}></img>
        </div>
        <div className='field'>
          <img src={field}></img>
        </div>
        <div className='parachuteBox'>
          <img src={parachuteBox}></img>
        </div>
      </div>

      <div className='about'>
        <div className="banner" id="banner">
          <div className="banner-content">
            <div className="link-home">
              <img src={logo}></img>
            </div>
            <div className="navigation">
              <a className='header-link' href="#banner">
                About
              </a>
              <a className='header-link' href="#participate-container">
                How to participicate
              </a>
              <a className='header-link' href="#instruction">
                Instruction
              </a>
            </div>
          </div>
        </div>
        <div className='award-container'>
          <div className='award-abs'>
            <div className='award-block'>

              <div className='timer-border'>
                <div className='timer'>
                  0:0{minutes}:{seconds < 10 ? '0' + seconds : seconds}
                </div>
              </div>

              <div className='drift-label'>
                <div className='drift' data-content='10000 $DRIFT'>
                  10000 $DRIFT
                </div>

              </div>
              <div className='whitelist-label'>
                WHITELIST AIRDROP
              </div>
              <div className='about-label'>
                Your wallet is whitelisted. DriftCoin is a universal decentralized identity protocol that connects people, assets, and dApps across different blockchains. Drift creates open-source, decentralized, universal identities.
              </div>
              <button className='get-award-button'>
                <div className='get-award-text'>
                  GET AWARD NOW

                </div>
              </button>
            </div>
          </div >
        </div>

        <div className='participate-container' id='participate-container'>
          <div className='participate-label'>
            <div className='participate-gradient'>
              We allow a limited number
            </div>
            <div className='participate-gradient'>
              of tokens to be minted, our first

            </div>
            <div>
              airdrop is whitelist only.
            </div>
          </div>
          <div className='participate'>
            <div className='participate-left'>
              <div id="cells">
                <div className='participate-outer-cell'>
                  <div className='participate-inner-cell'>
                    <img src={participate}></img>
                  </div>
                </div>
                <div className='participate-outer-cell'>
                  <div className='participate-inner-cell'>
                    <img src={participate}></img>
                  </div>
                </div>
                <div className='participate-outer-cell'>
                  <div className='participate-inner-cell'>
                    <img src={participate}></img>
                  </div>
                </div>
              </div>

              <div className='participate-header'>
                Exclusive Airdrop of Drift tokens
              </div>
              <div className='participate-text'>
                <div>
                  Gain access to an exclusive airdrop of Drift tokens,
                  a limited number given to members of our drop project.
                  These tokens open up additional opportunities on the
                  decentralized trading platform.
                </div>
              </div>
            </div>
            <div className='participate-right'>
              <div>

              </div>
              <img src={priority}></img>
              <div className='participate-header'>
                <span>
                  Priority Access to New
                </span>
                <span>
                  Features and Enhancements
                </span>
              </div>
              <div className='participate-text'>
                <div>
                  Drift token holders received via airdrop will have
                </div>
                <div>
                  benefits when accessing new features and updates
                </div>
                <div>
                  on the Drift platform.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='instruction' id="instruction">
          <div className='instruction-header'>
            <div className='instruction-gradient'>How to Participate </div>
            <div>in the AirDrop</div>
          </div>
          <div className='instructions-pics'>
            <div className='instructions-item'>
              <img src={image_1}></img>
              Connect Wallet!
            </div>
            <div className='instructions-item'>
              <img src={image_2}></img>
              Mint your drop!
            </div>
            <div className='instructions-item'>
              <img src={image_3}></img>
              Get the award!
            </div>
          </div>
        </div>
      </div>
      <footer>© 2024 Drift. All rights reserverd</footer>



    </div >
  );
}

export default Main;

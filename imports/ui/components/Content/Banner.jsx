import React from "react";

const Banner = () => (
  <header className="app-header">
    <section className="app-header__banner">
      <div className="app-header__banner-content-wrapper">
        <div className="row">
          <div className="column medium-8 large-7">
            <div className="app-header__banner-headline">
              A platform to find, share, and discuss healthy places to shop and eat.
            </div>
            <div className="app-header__banner-buttons">
              <a
                href="https://app.eatdrinkhealthy.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--wep-app"
              >
                <span>Web App</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
);

export default Banner;

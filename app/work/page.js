"use client";

import "../../styles/work.css";
import Image from "next/image";
import { Overlay } from "../../components/overlay.js";
import { useState } from "react";

function Home() {
  const [activeOverlay, setActiveOverlay] = useState(null);

  return (
    <div className="index">
      <div className="case-hero-container">
        <h1>Case Studies</h1>
        <p>Here are some tests that I&apos;ve done for clients</p>
      </div>

      <div className="case-container">
        <div className="case-modules">
          <div
            className="case-module"
            onClick={() => setActiveOverlay("american-girl")}
          >
            <h1 className="case-title">American Girl</h1>
            <Image
              className="case-image"
              alt="agc"
              src="/American_Girl_2.png"
              width={400}
              height={230}
            />
          </div>

          <Overlay
            isOpen={activeOverlay === "american-girl"}
            onClose={() => setActiveOverlay(null)}
          >
            <div className="overlay-container">
              <div className="overlay-content">
                <h1 className="overlay-title">American Girl</h1>
                <div className="overlay-tag">The Challenge</div>
                <p className="overlay-text">
                  The existing collections page with its uniformly sized product
                  displays, might be causing decision fatigue as there are no
                  specific products being emphasized. Causing potential user
                  engagement.
                </p>
                <div className="overlay-tag">The Opportunity</div>
                <p className="overlay-text">
                  By increasing the size of specific product cards in each row,
                  we have the potential to enhance user engagement, providing a
                  more visually diverse browsing experience that could lead to
                  better conversion rates.
                </p>
                <div className="stat-container">
                  <div className="stat-object">
                    <p className="main-stat">+14%</p>
                    <p className="stat-desc">
                      Mobile
                      <br />
                      Quick add to bag clicks
                    </p>
                  </div>

                  <div className="stat-object">
                    <p className="main-stat">+10%</p>
                    <p className="stat-desc">
                      Desktop
                      <br />
                      Quick add to bag clicks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Overlay>
          
          <div
            className="case-module"
            onClick={() => setActiveOverlay("burts-bees")}
          >
            <h1 className="case-title">Burts Bees</h1>
            <Image
              className="case-image"
              alt="burtsbees"
              src="/Burts_Bees.png"
              width={400}
              height={230}
            />
          </div>

          <Overlay
            isOpen={activeOverlay === "burts-bees"}
            onClose={() => setActiveOverlay(null)}
          >
            <div className="overlay-container">
              <div className="overlay-content">
                <h1 className="overlay-title">Burts Bees</h1>
                <div className="overlay-tag">The Challenge</div>
                <p className="overlay-text">
                  Customers are not frequently purchasing across different
                  product categories, limiting potential sales.
                </p>
                <div className="overlay-tag">The Opportunity</div>
                <p className="overlay-text">
                  Introduced an overlay that suggests related products from the
                  body line when customers add lip care products to their cart,
                  encouraging cross-category purchasing and increase in overall
                  sales.
                </p>
                <div className="stat-container">
                  <div className="stat-object">
                    <p className="main-stat">+23%</p>
                    <p className="stat-desc">AOV</p>
                  </div>

                  <div className="stat-object">
                    <p className="main-stat">+31%</p>
                    <p className="stat-desc">CVR</p>
                  </div>
                </div>
              </div>
            </div>
          </Overlay>

          <div
            className="case-module"
            onClick={() => setActiveOverlay("everytown")}
          >
            <h1 className="case-title">Everytown</h1>
            <Image
              className="case-image"
              alt="everytown"
              src="/Everytown_Hero.png"
              width={400}
              height={230}
            />
          </div>

          <Overlay
            isOpen={activeOverlay === "everytown"}
            onClose={() => setActiveOverlay(null)}
          >
            <div className="overlay-container">
              <div className="overlay-content">
                <h1 className="overlay-title">Everytown</h1>
                <div className="overlay-tag">The Challenge</div>
                <p className="overlay-text">
                  Client wanted a full page redesign with emphasis on the
                  donation page as well as more form submissions per visit.
                </p>
                <div className="overlay-tag">The Opportunity</div>
                <p className="overlay-text">
                  Introduced new sections such as a radio-style donation
                  section, a cleaner form submission section and a recommended
                  product section.
                </p>
                <div className="stat-container">
                  <div className="stat-object">
                    <p className="main-stat">+14%</p>
                    <p className="stat-desc">
                      Donations
                      <br />
                      per visitor
                    </p>
                  </div>

                  <div className="stat-object">
                    <p className="main-stat">+9%</p>
                    <p className="stat-desc">
                      Form submissions
                      <br />
                      per visitor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Overlay>
        </div>
      </div>
    </div>
  );
}

export default Home;

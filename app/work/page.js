"use client";

import { useEffect } from "react";
import "../../styles/work.css";
import Image from "next/image";

function modulePopUp() {
  let modules = document.querySelectorAll(".case-module");
  for (let mod of modules) {
    mod.addEventListener("click", () => {
      console.log('click')
    });
  }
}

export default function Home() {
  useEffect(() => {
    modulePopUp();
  }, []);
  return (
    <div className="index">

      <div className="case-hero-container">
        <h1>Case Studies</h1>
        <p>Here are some tests that I&apos;ve done for clients</p>
      </div>

      <div className="case-container">
        <div className="case-modules">
          <div className="case-module">
            <h1 className="case-title">American Girl</h1>
            <Image
              className="case-image"
              alt="agc"
              src="/American_Girl_2.png"
              width={400}
              height={300}
            />
          </div>
          <div className="case-module">
            <h1 className="case-title">Burts Bees</h1>
            <Image
              className="case-image"
              alt="burtsbees"
              src="/Burts_Bees.png"
              width={400}
              height={300}
            />
          </div>
          <div className="case-module">
            <h1 className="case-title">Everytown</h1>
            <Image
              className="case-image"
              alt="everytown"
              src="/Everytown_Hero.png"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

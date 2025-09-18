"use client";

import "../styles/nav.css";
import Link from "next/link";
import { Overlay } from "../components/overlay.js";
import { useState } from "react";

export default function Header() {
  const [activeOverlay, setActiveOverlay] = useState(null);

  return (
    <div className="main-nav">
      <Link className="nav-item" alt="home" href="/">
        HOME
      </Link>

      <Link className="nav-item" alt="work" href="/work">
        WORK
      </Link>

      {
        <button
          className="nav-item"
          onClick={() => setActiveOverlay("contact")}
        >
          CONTACT
        </button>
      }

      <Link
        className="nav-item"
        alt="resume"
        href="/Sota_Iwaku_Resume.pdf"
        target="_blank"
      >
        RESUME
      </Link>

      <Overlay
        isOpen={activeOverlay === "contact"}
        onClose={() => setActiveOverlay(null)}
      >
        <div className="email-overlay-container">
          <div className="email-overlay-content">
            <h1 className="email-overlay-title">Contact me!</h1>
            <p className="email-overlay-text">
              Email me at:{" "}
              <button
                id="email-link"
                onClick={emailLink}
              >
                sota.iwaku@gmail.com <p id="copyText" className="hidden">Copied!</p>
              </button>
              <br />
              Or press the button below to open your mail app!
            </p>
            <a className="email-button" href="mailto:sota.iwaku@gmail.com">
              Send me an Email!
            </a>
          </div>
        </div>
      </Overlay>
    </div>
  );
}

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    return;
  }
}

function emailLink() {
  var email = document.getElementById("email-link").innerHTML;
  copyTextToClipboard(email);
  var copyText = document.getElementById("copyText");
  console.log(copyText);
  copyText.classList.remove("hidden");
  setTimeout(() => {
      copyText.classList.add("hidden");
  }, 1000);
}
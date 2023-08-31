import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <button>Blog</button>
          <h1 className="black">Eileen's Corner</h1>

          <p className="gray">
            I design and code beautiful simple things, and I love what I do.
          </p>
          <a className="red" href="mailto:contact@blaiti.com">
            Let&#39;s chat!
          </a>
        </div>
        <Image
          src="https://img.freepik.com/premium-vector/black-line-art-flower-california-poppy-with-red-spots-doodle-poppy_624728-95.jpg"
          width={500}
          height={500}
          alt="eileen's favorite flowers"
        />
      </div>
    </header>
  );
}

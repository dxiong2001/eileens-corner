import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex light-bg justify-space">
      <div className="logo black">
        {/* <Link href="/">
          
        </Link> */}
        <img
          id="logo-image"
          src="/images/eye-logo.png"
          width={50}
          height={50}
          alt="site logo"
        />
        <Link href="/">
          <h1 id="logo-text">Eileen's Corner</h1>
        </Link>
      </div>

      <ul className="flex black float-left">
        <li className="red">
          <Link href="/">{"< Home />"}</Link>
        </li>
        <div className="dropdown">
          <li>
            <Link href="/reviews" className="dropbtn">
              Reviews
            </Link>
          </li>
          <div className="dropdown-content">
            <a href="/new_review">Write a new review</a>
            {/* <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>

        <li>
          <Link href="/lists">Lists</Link>
        </li>
      </ul>
    </nav>
  );
}

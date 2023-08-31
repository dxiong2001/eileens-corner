import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex light-bg justify-space">
      <div className="logo black">
        <Link href="/">
          <img
            src="/images/eye-logo.png"
            width={50}
            height={50}
            alt="site logo"
          />
        </Link>
      </div>

      <ul className="flex black float-left">
        <li className="red">
          <Link href="/">{"< Home />"}</Link>
        </li>
        <li>
          <Link href="/#about">About Me.</Link>
        </li>
      </ul>
    </nav>
  );
}

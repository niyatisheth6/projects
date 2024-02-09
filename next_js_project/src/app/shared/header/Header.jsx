"use client";
import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie, setCookie } from "cookies-next";

function Header() {
  const router = useRouter();
  function handleLogout() {
    // setCookie("isLogin", false);
    deleteCookie("isLogin");
    router.push("/auth/login");
  }
  return (
    <div className="sticky top-0">
      <div className="main-header">
        <div className="container header">
          <h1 className="text-3xl font-bold">My App</h1>
          <div>
            <ul className="header-menu items-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <button onClick={handleLogout} className="btn">
                  Log Out
                </button>
                {/* <Link href="/auth/login" onClick={handleLogout}>
                  Log Out
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

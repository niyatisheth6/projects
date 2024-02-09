import React from "react";
import { Link } from "react-router-dom";

function Header() {
  function handleLogOut() {
    localStorage.setItem("isLogin", false);
  }

  return (
    <div className="bg-[#13007C] sticky top-0 left-0">
      <div className="container">
        <div className="header">
          <div className="text-[40px] font-extrabold">Test</div>
          <div>
            <ul className="flex gap-6 text-[20px] font-bold">
              <li>
                <Link to={"/"}>DashBoard</Link>
              </li>
              <li>
                <Link to={"/table-data"}>TableData</Link>
              </li>
              <li>
                <Link to={"/create-admin"}>Create Admin</Link>
              </li>
              <li>
                <Link to={"/login"} onClick={handleLogOut}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

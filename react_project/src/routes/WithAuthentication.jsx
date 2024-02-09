import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WithAuthentication({ Component }) {
  const navigate = useNavigate();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return <Component />;
}

export default WithAuthentication;

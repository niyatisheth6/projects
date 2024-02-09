import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WithoutAuthentication({ Component }) {
  const navigate = useNavigate();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return <Component />;
}

export default WithoutAuthentication;

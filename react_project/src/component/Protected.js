import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ Components }) {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    if (!isLogin) {
      console.log("protextd");
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <div>
      <Components />
    </div>
  );
}

export default ProtectedRoutes;

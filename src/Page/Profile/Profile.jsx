import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Auth";

function Profile(props) {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      Welcom {auth.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;

import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>

      <div className="nav space-x-3">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
        <Link to="/dev">Dev Information</Link>
      </div>
      <div className="login">
        <div className="flex gap-2">
          {user && user?.email ? (
            <div>
              {" "}
              <img
                className="w-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />{" "}
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}

          {user && user?.email ? (
            <button className="btn btn-neutral rounded-none" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

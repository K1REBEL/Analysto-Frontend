import "./Sidebar.scss";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="top">
         <img className="logo" src="/images/logo.png" alt="logo" />
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <MdDashboard className="icon" />
              <span>Dashboard</span>
            </li>

            <p className="title">LISTS</p>
            <li>
              <Link to="/Home">
                <FaUser className="icon" />
                <span>Users</span>
              </Link>
            </li>
            <p className="title">YOUR PROFILE</p>
          
            <li>
              <span to="/Login" style={{}}>
                <MdLogout className="icon" />
                <span>Logout</span>
              </span>
             
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

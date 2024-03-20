import "./Sidebar.scss";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Sidebar() {
  
  return (
    <div>
      <div className="sidebar">
      
      
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <MdDashboard className="icon" />
              <span>Dashboard</span>
            </li>
            <li>
              <Link to="/">
                <FaHouse  className="icon" />
                <span>Over view</span>
              </Link>
            </li>

            <p className="title">LISTS</p>
            <li>
             
                <FaUser className="icon" />
                <span>Users</span>
             
            </li>
            
            <p className="title">YOUR PROFILE</p>
          
            <li>
            
                <MdLogout className="icon" />
                <span>Logout</span>
             
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


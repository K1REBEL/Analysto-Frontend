import "./Sidebar.scss";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";




function Sidebar() {
  return (
    <div>
        <div className="sidebar">
          <div className="top">
            <span className="logo">Analisto</span>
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
              <li><FaUser className="icon"/>
              <span>Users</span>
              </li>
              <p className="title">YOUR PROFILE</p>

              <li>
              <MdLogout className="icon"/>
              <span>Logout</span></li>
            </ul>
          </div>
          </div>
        </div>

  
  )
}

export default Sidebar
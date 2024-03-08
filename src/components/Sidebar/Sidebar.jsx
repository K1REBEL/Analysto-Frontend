import "./Sidebar.scss";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
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
              <p className="title">USERS</p>

              <li>
              <IoIosNotifications className="icon" />
                <span>Notification</span>
                </li>
              <li>
              <IoIosSettings className="icon"/>
              <span>Setting</span>
              </li>
              <li>
              <FaRegUserCircle className="icon"/>
               <span>Profile</span>
               </li>
              <li>
              <MdLogout className="icon"/>
              <span>Logout</span></li>
            </ul>
          </div>
          <div className="bottom">
            <div className="coloOption"></div>
            <div className="coloOption"></div>



          </div>
        </div>

    </div>
  )
}

export default Sidebar
import "./Navbar.scss"
import { FaSearch } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaList } from "react-icons/fa";




function Navbar() {
  return (
    <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <FaSearch className="icon" />
          </div>
          <div className="items">
            <div className="item">
            <MdLanguage className="icon"/>
            English
            </div>
            <div className="item">
            <MdOutlineDarkMode className="icon" />
            </div>
            <div className="item">
            <IoMdNotifications className="icon"/>
            <div className="counter">1</div>
            </div>
         
            <div className="item">
            <FaList className="icon"/>
            </div>
            <div className="item">
              <img src="user.png"
               alt="" className="avatar"/>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Navbar
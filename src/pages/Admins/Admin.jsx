import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminTable from "../Admins/AdminTable";
import "./Admin.scss";

const Admin = () => {
  return (
    <div className='home'>
    <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="admin">
          <AdminTable/>
        </div>
      </div>
      </div>
    
  );
};

export default Admin;

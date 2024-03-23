import Sidebar from "../../components/Sidebar/Sidebar";
import AdminTable from "../Admins/AdminTable";
import "./Admin.scss";

const Admin = () => {
  return (
    <div className='home'>
    <Sidebar />
        <div className="admin">
          <AdminTable/>
      
      </div>
      </div>
    
  );
};

export default Admin;

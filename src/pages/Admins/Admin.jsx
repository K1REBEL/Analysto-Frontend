import Sidebar from "../../components/Sidebar/Sidebar";
import AdminTable from "../Admins/AdminTable";
import "./Admin.scss";

const Admin = () => {
  return (
    <div className='D'>
        <Sidebar />
       <div className="wi">
        <AdminTable />
      </div>
      </div>
     
    
  );
};

export default Admin;

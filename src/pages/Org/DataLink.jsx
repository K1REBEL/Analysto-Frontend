import Sidebar from "../../components/Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";
import DatatableOrg from "./DatatableOrg";
import "./DataLink.scss"

const DataLink = () => {
  return (
    <div className='DataLink'>
        <Sidebar />
      <div className="DataLinkContainer">
        {/* <Navbar /> */}
       <div className="widgets">
        <DatatableOrg />
       </div>
      </div>
    </div> 
  )

  
}

export default DataLink;
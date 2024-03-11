import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DatatableOrg from "../../pages/Org/DatatableOrg";
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
      <div className="homeContainer">
        <Navbar />
       <div className="widgets">
        <DatatableOrg />
       </div>
      </div>
    </div> 
  )

  
}

export default Home;
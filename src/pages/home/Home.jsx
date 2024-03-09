import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
      <div className="homeContainer">
        <Navbar />
       <div className="widgets">
        <Datatable />
       </div>
      </div>
    </div> 
  )

  
}

export default Home;
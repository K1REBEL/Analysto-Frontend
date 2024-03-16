import notfound from "../../img/notfound.svg";
import "./NotFound.scss";

function NotFound() {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
    
          <div className="contai">
            <div className="row justify-content-center">
              <div>
                <div className="images text-center mt-4">
                  <img className="mb-4 img-error" src={notfound} alt="" />
                  <p className="lead">This requested URL was not found on this server.</p>
                    <i className="fas fa-arrow-left me-1"></i>
                    Return

                </div>
              </div>
            </div>
          </div>
      
      </div>
    </div>
  );
}

export default NotFound;

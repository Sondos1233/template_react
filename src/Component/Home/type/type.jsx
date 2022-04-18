import "./type.css";
import apartment from "../../../images/apartment.gif";
import house from "../../../images/house.gif";
import room from "../../../images/rooms.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight,faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const Type = () => {
  return (
    <>
      <div className="Type_home py-5 position-relative">
          <span className="slider_left py-1 px-2 text-secondary"><FontAwesomeIcon icon={faChevronLeft} /></span>
          <span className="slider_right py-1 px-2 text-secondary"><FontAwesomeIcon icon={faChevronRight} /></span>
        <div className=" container">
          <h1 className="text-center fs-2 mb-4">Type Property we have</h1>
          <p className="text-center text-secondary mb-5">
            Lorem ipsum is typically a corrupted version of "De finibus bonorum
            et malorum",
            <br /> a 1st century BC text by the Roman stateman
          </p>
          <section className="row">
            <aside className="col">
              <img src={apartment} alt="" />
              <div className="d-flex justify-content-between mt-3 px-1">
                <p>
                  Apartments
                  <p className="list pt-1 text-secondary">235 listings</p>
                </p>
                <p className="see_list">See Listing</p>
              </div>
            </aside>
            <aside className="col">
              <img src={house} alt="" />
              <div className="d-flex justify-content-between mt-3 px-1">
                <p>
                  Houses<p className="list pt-1 text-secondary">235 listings</p>
                </p>
                <p className="see_list">See Listing</p>
              </div>
            </aside>
            <aside className="col">
              <img src={room} alt="" />
              <div className="d-flex justify-content-between mt-3 px-1">
                <p>
                  Rooms<p className="list pt-1 text-secondary">235 listings</p>
                </p>
                <p className="see_list">See Listing</p>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </>
  );
};
export default Type;

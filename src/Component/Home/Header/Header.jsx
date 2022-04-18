import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="container header_content">
          <section>
            <p className="text-secondary" style={{"fontSize":"15px"}}> #<span style={{"fontSize":"10px"}} className="pe-1">1</span>PROPERTY AGENT</p>
            
            <h1 className="best_place" >The Best Place To Find your Dream House</h1>
           
          </section>
          <section >
              <button className="btn  btn_buy px-4">Buy</button>
              <button className="btn  btn_Sell px-4">Sell</button>
          </section>
          <section className="header_where d-flex justify-content-between bg-white py-2 px-3">
              <aside className="py-1" ><span>Where</span><br/><span>City, neightboor or address</span></aside>
              <aside className="px-3 py-1 border-start"><span>Where</span><br/><span>City, neightboor or address</span></aside>
              <aside className="py-1"><button className="btn btn_Search">Search</button></aside>
          </section>
          
        </div>
      </div>
    </>
  );
};
export default Header;

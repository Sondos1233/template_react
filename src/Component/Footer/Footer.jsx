import './footer.css'
const Footer =()=>{
    return(
        <>
          <footer className="bg-dark p-5 text-secondary">
            <div className="container">
              <div className="row">
              <section className="col-4">
                 <h6 className="text-white">Your Logo</h6>
                 <p style={{"fontSize":"13px"}}>Lorem ipsum is typically a corrupted version of "De finibus bonorum et malorum", a 1st century BC saleman</p>
               </section>
               <section className="col-2 ">
                
                 <ul>
                 Company
                   <li>About Us</li>
                   <li> Career</li>
                 </ul>
               </section>
               <section className="col-2">
               <ul>
                 Company
                   <li>About Us</li>
                   <li> Career</li>
                 </ul>
               </section>
               <section className="col-2">
               <ul>
                 Company
                   <li>About Us</li>
                   <li> Career</li>
                 </ul>
               </section>
            
             
              </div>
           
            </div>
              
          </footer>
        </>
    )
}
export default Footer;
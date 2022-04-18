
import './Content.css'
import Company_Photo from '../../../images/ourCompany.jpg'
import home_buy from '../../../images/home_buy.png'
const OurContent =()=>{
    return(
        <>
          <div className="company_content mb-5">
               <section className='me-5'><img src={Company_Photo} alt="Company_Photo" className='Company_Photo'/></section>
               <section className='py-5  company_work'>
                 <h2>We Are best and most trusted real estat agent</h2>
                 <div className='d-flex justify-content-between mt-5'>
                   <section className=' Home_icon me-3'><img src={home_buy} alt="" style={{"width":"80px","height":"80px"}}/></section>
                   <section>
                     <h5>Buy a Home</h5>
                     <p>Browse millions of propertiesin your city,sace your favourites and setup search alert</p>
                   </section>
                 </div>
                 <div className='d-flex justify-content-between mt-5'>
                   <section className=' Home_icon me-3'><img src={home_buy} alt="" style={{"width":"80px","height":"80px"}}/></section>
                   <section>
                     <h5>Rent a Home</h5>
                     <p>Communication directly with advertiser, if all goes well. one of these verfied users</p>
                   </section>
                 </div>
                 <div className='d-flex justify-content-between mt-5'>
                   <section className=' Home_icon me-3'><img src={home_buy} alt="" style={{"width":"80px","height":"80px"}}/></section>
                   <section>
                     <h5>Sell a Home</h5>
                     <p>Find your dream house? you just need to a few  action and you can start move to your house.</p>
                   </section>
                 </div>
               </section>
          </div>
        </>
    )
}
export default OurContent;
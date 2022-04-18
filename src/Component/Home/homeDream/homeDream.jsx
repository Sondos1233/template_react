import check  from '../../../images/Check.png'
import block from '../../../images/block.jpg'
import home from '../../../images/home.jpg'
import './homeDream.css'
const HomeDream =()=>{
    return(
        <>
          <div className="d-flex justify-content-between home_dream">
              <section className=' yourhouse'>
                  <h2 className=''>Make your home like Dream like True</h2>
                  <div className='d-flex justify-content-between mt-4'>
                   <section className=' Home_icon me-2'><img src={check} alt="" style={{"width":"60px","height":"60px"}}/></section>
                   <section>
                     <h5>Buy a Home</h5>
                     <p>Browse millions of propertiesin your city,sace your favourites and setup search alert</p>
                   </section>
                   </div>
                   <div className='d-flex justify-content-between mt-4'>
                   <section className=' Home_icon me-2'><img src={check} alt="" style={{"width":"60px","height":"60px"}}/></section>
                   <section>
                     <h5>Buy a Home</h5>
                     <p>Browse millions of propertiesin your city,sace your favourites and setup search alert</p>
                   </section>
                 </div>
                 <button className='btn btn-explore px-4 py-2 mt-4'>Explore More</button>
             
              </section>
              <section className='d-flex ms-5'>
                  <img src={home} alt=""  className="me-3"/>
                  <img src={block} alt="" />
              </section>


          </div>
        </>
    )
}
export default HomeDream;
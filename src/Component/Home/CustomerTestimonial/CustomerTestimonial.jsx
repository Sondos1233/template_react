import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./custReview.css";
const CustomerTestimonial = () => {
  return (
    <>
      <div className="row Cust_review">
        <section className="col-4 pe-5">
          <h1>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </h1>
          <h1 className="Custo_test">Customer Testimonial</h1>
          <p className="mb-3">
            Lorem ipsum is typically a corrupted version of "De finibus bonorum
            et malorum", a 1st century BC text by the Roman stateman
          </p>
          <button className="btn btn-view px-4 py-2 mt-4">View All <span className="ps-5 d-lg-inline d-none"><FontAwesomeIcon icon={faArrowRight}/></span></button>
        </section>
        <section className="col-8 bg-light p-5">
          <aside className="bg-white p-4 pb-3 mb-4">
            <p>
              {" "}
              Lorem ipsum is typically a corrupted version of "De finibus
              bonorum et malorum", a 1st century BC saleman
            </p>
            <p>Edith Clayton<br/><span className="text-secondary">Marketing Specialist</span></p>
          </aside>
          <aside className="bg-white p-4 pb-3 ">
            <p>
              {" "}
              Lorem ipsum is typically a corrupted version of "De finibus
              bonorum et malorum", a 1st century BC saleman
            </p>
            <p>Edith Clayton<br/><span className="text-secondary">Marketing Specialist</span></p>
          </aside>
        </section>
        <section></section>
      </div>
    </>
  );
};
export default CustomerTestimonial;

import OurContent from "./Content/Content";
import Header from "./Header/Header";
import "../../Component/main_style.css";
import HomeDream from "./homeDream/homeDream";
import CustomerTestimonial from "./CustomerTestimonial/CustomerTestimonial";
import Type from "./type/type";
const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <OurContent />
      </div>
      <Type />
      <div className="container">
        <HomeDream />
        <CustomerTestimonial />
      </div>
    </>
  );
};
export default Home;

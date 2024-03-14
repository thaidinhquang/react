import Banner from "../components/HomePage/Banner";
import Blog from "../components/HomePage/Blog";
import Products from "../components/HomePage/Products";
import Service from "../components/HomePage/Service";
import Shop from "../components/HomePage/Shop";



const HomePages = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Shop />
      <Blog/>
      <Service/>
    </div>
  );
};

export default HomePages;

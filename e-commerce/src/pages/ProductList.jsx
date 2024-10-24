import Categories from "../components/layout/Categories.jsx";
import Clients from "../components/layout/Clients.jsx";
import Footer from "../components/layout/Footer.jsx";
import Header from "../components/layout/Header.jsx";
import Shop from "../components/layout/Shop.jsx";

function ProductList({ data }) {
  return (
    <div className="ProductList">
      <Header data={data} />
      <Categories data={data.categories} />
      <Shop data={data.shop} />
      <Clients data={data.clients} />
      <Footer data={data} />
    </div>
  );
}

export default ProductList;
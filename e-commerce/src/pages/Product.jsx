import Clients from "../components/Clients";
import Path from "../components/Path";
import ProductNavBar from "../components/product_page/ProductNavBar";
import SectionMid from "../components/product_page/SectionMid";
import SectionProductBestSeller from "../components/product_page/SectionProductBestSeller";
import ProductCarousel from "../components/product_page/ProductCarousel";

export default function Product() {
  return (
    <>
      <div className="bg-bgclr-ligth-gray-1">
        <div className="container-big px-[1rem] py-[1.5rem]">
          <Path />
        </div>
      </div>
      <ProductCarousel />
      <ProductNavBar />
      <SectionMid />
      <SectionProductBestSeller />
      <Clients />
    </>
  );
}
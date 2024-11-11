import {
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setProductList, addProducts } from "../../store/actions/productActions";
import useQueryParams from "../../hooks/useQueryParams";
import Products from "./Products";

export default function Shop({ data }) {
  const products = useSelector((store) => store.product.products);
  const categories = useSelector(
    (store) => store.product.categories.categoryList
  );
  const { totalProductCount } = products;
  const dispatch = useDispatch();
  const { category } = useParams();

  const [filterParams, setFilterParams] = useState({
    filter: "",
    sort: "",
  });

  const [queryParams, setQueryParams] = useQueryParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 25;

  // Handle filter and sort submission
  const submitHandler = (e) => {
    e.preventDefault();
    setQueryParams(filterParams);
  };

  // Handle page changes via buttons
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle the scroll event for infinite scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200 && hasMore
    ) {
      // Trigger next data load
      loadMoreData();
    }
  };

  // Fetch more data when needed
  const loadMoreData = () => {
    const categoryId = categories.find((c) => c.code == category)?.id;
    const newOffset = offset + itemsPerPage;
    setOffset(newOffset);
    dispatch(
      addProducts({
        ...queryParams,
        category: categoryId,
        limit: itemsPerPage,
        offset: newOffset,
      })
    );
  };

  // Initialize fetching when component mounts or params change
  useEffect(() => {
    const categoryId = categories.find((c) => c.code == category)?.id;
    const offset = (currentPage - 1) * itemsPerPage;
    dispatch(
      setProductList({ ...queryParams, category: categoryId, limit: itemsPerPage, offset })
    );
    setHasMore(true);
    setOffset(itemsPerPage);
  }, [queryParams, category, currentPage]);

  useEffect(() => {
    if (totalProductCount && products.length >= totalProductCount) {
      setHasMore(false);
    }
  }, [products, totalProductCount]);

  // Scroll listener setup
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore]);

  return (
    <div className="Shop">
      <form
        className="w-3/4 mx-auto py-6 flex justify-between items-center sm:flex-col sm:items-center sm:gap-6"
        onSubmit={submitHandler}
      >
        <p>{data.showing + totalProductCount + data.results}</p>
        <div className="flex gap-2 items-center">
          <p>{data.views}</p>
          <div className="border rounded-md p-2">
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </div>
          <div className="border border-info rounded-md p-4">
            <FontAwesomeIcon icon={faListCheck} />
          </div>
        </div>
        <input
          id="filter"
          name="filter"
          placeholder="Search"
          className="bg-info border border-solid border-neutral rounded-[5px] py-3 pl-4 pr-7"
          onChange={(e) => {
            setFilterParams({ ...filterParams, filter: e.target.value });
          }}
        />
        <div className="flex gap-3">
          <select
            id="sort"
            name="sort"
            className="bg-info border border-solid border-neutral rounded-[5px] py-3 pl-4 pr-7"
            defaultValue=""
            onChange={(e) => {
              setFilterParams({ ...filterParams, sort: e.target.value });
            }}
          >
            <option value="price:asc">{data.p_asc}</option>
            <option value="price:desc">{data.p_desc}</option>
            <option value="rating:asc">{data.r_asc}</option>
            <option value="rating:desc">{data.r_desc}</option>
          </select>

          <button
            type="submit"
            className="text-white bg-secondary border-0 border-solid rounded-[5px] py-3 px-5"
          >
            {data.button}
          </button>
        </div>
      </form>
      <Products data={products} />

      {/* Pagination */}
      <div className="mt-8 flex justify-center font-bold text-secondary bg-white w-fit mx-auto border border-solid border-neutral rounded-lg">
        <button
          className={`text-base py-6 px-[25px] ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          style={{
            backgroundColor: currentPage === 1 ? "#23A6F0" : "#FFFFFF",
            color: currentPage === 1 ? "#FFFFFF" : "#23A6F0",
          }}
        >
          {data.pagebuttons.first}
        </button>

        {[currentPage - 1, currentPage, currentPage + 1].map((page, index) =>
          page > 0 && page <= Math.ceil(totalProductCount / itemsPerPage) ? (
            <button
              key={index}
              className={`text-base py-[25px] px-[20px] border border-solid border-neutral ${
                currentPage === page
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary"
              }`}
              onClick={() => handlePageChange(page)}
              style={{
                backgroundColor: currentPage === page ? "#23A6F0" : "#FFFFFF",
                color: currentPage === page ? "#FFFFFF" : "#23A6F0",
              }}
            >
              {page}
            </button>
          ) : null
        )}

        <button
          className={`text-base py-6 px-[25px] ${currentPage === Math.ceil(totalProductCount / itemsPerPage) ? "cursor-not-allowed" : ""}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalProductCount / itemsPerPage)}
          style={{
            backgroundColor: currentPage === Math.ceil(totalProductCount / itemsPerPage) ? "#23A6F0" : "#FFFFFF",
            color: currentPage === Math.ceil(totalProductCount / itemsPerPage) ? "#FFFFFF" : "#23A6F0",
          }}
        >
          {data.pagebuttons.next}
        </button>
      </div>
    </div>
  );
}

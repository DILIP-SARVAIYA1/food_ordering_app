import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUI";

const Body = () => {
  const [nData, setnData] = useState([]);
  const [inputData, setinputData] = useState("");
  const [filterRestorent, setfilterRestorent] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setnData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestorent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return nData?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div id="filter">
        <input
          className="input"
          type="text"
          placeholder="Search Text Hear"
          value={inputData}
          onChange={(e) => {
            setinputData(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterRes = nData.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(inputData.toLocaleLowerCase());
            });
            setfilterRestorent(filterRes);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = nData?.filter((x) => x?.info?.avgRating > 4);
            setfilterRestorent(filterList);
          }}
        >
          Top rated rasturant
        </button>
      </div>
      <div className="res-container">
        {filterRestorent?.map((x) => (
          <ResCard key={x?.info?.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import ResCard, { withPromotedLabel } from "./ResCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [nData, setnData] = useState([]);
  const [inputData, setinputData] = useState("");
  const [filterRestorent, setfilterRestorent] = useState("");
  const ResCardPromoted = withPromotedLabel(ResCard);

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
    <div className="p-4">
      <div id="filter">
        <input
          className="mb-4 p-1 text-sm mr-4 border-solid border-black border-[1px]"
          type="text"
          placeholder="Search Text Hear"
          value={inputData}
          onChange={(e) => {
            setinputData(e.target.value);
          }}
        />
        <button
          className="border-solid border-black border-[1px] mx-4 px-4 py-1 bg-slate-600 text-red-50"
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
          className="border-solid border-black border-[1px] mx-4 px-4 py-1 bg-green-500 hover:bg-green-700 "
          onClick={() => {
            const filterList = nData?.filter((x) => x?.info?.avgRating > 4);
            setfilterRestorent(filterList);
          }}
        >
          Top rated rasturant
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-5">
        {console.log(filterRestorent)}
        {filterRestorent?.map((x) => (
          <Link to={"res/" + x?.info?.id} key={x?.info?.id}>
            {x.info.promoted ? (
              <ResCardPromoted resData={x} />
            ) : (
              <ResCard resData={x} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

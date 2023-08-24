import ResCard from "./ResCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [nData, setnData] = useState([]);
  // console.log(nData);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setnData(
      await json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    // .card.card.gridElements.infoWithStyle.restaurants
  };
  return (
    <div className="body">
      <div id="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = nData.filter((x) => x.info.avgRating > 4);
            setnData(filterList);
          }}
        >
          Top rated rasturant
        </button>
      </div>
      <div className="res-container">
        {nData.map((x) => (
          <ResCard key={x.info.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;

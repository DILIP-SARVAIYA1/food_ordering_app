import Data from "../utils/mockData";
import ResCard from "./ResCard";
const Body = () => {
  return (
    <div className="body">
      <div id="search">Search hear</div>
      <div className="res-container">
        {Data.map((x) => (
          <ResCard key={x.info.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;

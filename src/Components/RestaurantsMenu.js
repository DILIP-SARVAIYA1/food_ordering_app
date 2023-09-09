import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { RES_ID } from "../utils/constant";

const RestaurantsMenu = () => {
  const [menuData, setmenuData] = useState(null);
  const { resId } = useParams();
  console.log(menuData);

  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const menuApi = await fetch(RES_ID + resId);
    const json = await menuApi.json();
    setmenuData(json.data);
  };
  if (menuData === null) return <ShimmerUi />;
  const { name } = menuData.cards[0]?.card?.card?.info;
  const { itemCards } =
    menuData?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // console.log(itemCards);
  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {item?.card?.info?.name / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantsMenu;

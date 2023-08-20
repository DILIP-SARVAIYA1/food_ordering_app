import { CARD_IMG } from "../utils/constant";
const ResCard = (Props) => {
  const { resData } = Props;
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    resData?.info;
  // console.log(name);
  // console.log(resData.info);
  return (
    <div className="res-card">
      <img src={CARD_IMG + cloudinaryImageId} alt="res-img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default ResCard;

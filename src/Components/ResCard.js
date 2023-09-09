import { CARD_IMG } from "../utils/constant";
const ResCard = (Props) => {
  const { resData } = Props;
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    resData?.info;
  // console.log(name);
  // console.log(resData.info);
  return (
    <div className="w-48 h-full bg-gray-200 p-2 rounded-lg hover:bg-slate-400 hover:shadow-2xl">
      <img
        className="max-h-[130px] w-full object-cover"
        src={CARD_IMG + cloudinaryImageId}
        alt="res-img"
      />
      <h3 className="font-bold mt-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      {/* <h4>{deliveryTime} Minutes</h4> */}
    </div>
  );
};
export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <h1>Promoted</h1>
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;

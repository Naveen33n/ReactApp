import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
  const{resData}=props;
  const{name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info
  return(
    <div className="res-card">
      <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
      <h3>{name}</h3>
      <p>{cuisines.join(" , ")}</p>
      <h4>{avgRating}</h4>
      <h5>{costForTwo}</h5>
    </div>
  )
}
export default RestaurantCard
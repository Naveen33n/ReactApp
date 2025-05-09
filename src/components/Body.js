import React from "react";
import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
import Shimmer from "./Shimmer";
const Body = () =>{
  
  const[listOfRestaurants,setListOfRestaurants]=useState([])
  const[searchText,setSearchText]=useState("")
  const[filterRes,setFilterRes]=useState([])
  
  useEffect(()=>{
    fetchData()

  },[])
  const fetchData=async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.026769&lng=76.9057724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json= await data.json()
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  return listOfRestaurants.length===0 ?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={()=>{
          const filteredRestaurant=  listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText))
setFilterRes(filteredRestaurant)

          }}>search</button>
        </div>
         
        <button className="filter-btn" onClick={()=>{
          const filterRestaurants =listOfRestaurants.filter((res)=>res.info.avgRating>4.4)
          setFilterRes(filterRestaurants)
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
      {
        filterRes.map((restaurant)=>
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
      }  
        
      </div>
    </div>
  )
}
export default Body;
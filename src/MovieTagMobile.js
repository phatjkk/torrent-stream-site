import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import StarRatingComponent from 'react-star-rating-component';
import MovieTypes from "./MovieTypes"
function MovieTagMobile({ id, name, enName, year, imbd, time, img,object }) {
  const handleChooseMovie = (id) => {
    localStorage.setItem(
      "movieData",
      JSON.stringify({ idMovie: id, atWatch: 0 })
    );
  };
  console.log("render");

  return (
    <div
      name="info"
      className=" m-2 pb-2 w-auto rounded-lg bg-opacity-30 bg-clip-padding backdrop-blur drop-shadow-lg "
    >
      <Link to="/Watch">
      <div className="group">
        <img
          name="image"
          onClick={() => handleChooseMovie(id)}
          className={"group-hover:brightness-50 border-2 border-transparent group-hover:border-blue-600 rounded-lg w-full h-3/4 drop-shadow-lg "}
          // style={{ height: "20%" }}
          src={
            isMobile
              ? "https://www.themoviedb.org/t/p/original" + img
              : "https://www.themoviedb.org/t/p/w500" + img
          }
        />
        {/* <p className="text-white">
          {
            object.genre_ids.map((e)=><>{MovieTypes.find(x => x.key === e).name} </>)
          }
        </p> */}
      <div
        className="
        invisible
        group-hover:visible
        absolute 
        p-1
        right-3
        top-3
        text-white
font-semibold
        "
      >
       
          {time}
      </div>
      <div
        className="
        invisible
        group-hover:visible
        absolute
        rounded-full
        p-1
        left-3
        top-2
        text-white
        "
      >
 
        <StarRatingComponent 
          name="IMBDrate" 
          editing={false}
          renderStarIcon={() => <FontAwesomeIcon
            className="mr-1 shadow-lg text-xs"
            icon={faStar}
          />}
          starCount={5}
          value={imbd*5/10}
        /><p className="font-semibold">IMDb: {imbd}/10</p>
    
      </div>
        </div>
      </Link>

      <h4 className="pt-2 pl-2 text-yellow-50 font-semibold font-sans text-l">
        {name}
      </h4>
      <p className="pl-2 text-gray-200 text-sm">
        {enName} ({year})
      </p>
    </div>
  );
}
export default memo(MovieTagMobile);

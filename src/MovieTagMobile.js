import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { memo } from "react";
import { isMobile } from "react-device-detect";
function MovieTagMobile({ id, name, enName, year, imbd, time, img }) {
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
      className="m-2 pb-2 w-auto rounded-xl bg-white bg-opacity-30 bg-clip-padding backdrop-blur drop-shadow-lg "
    >
      <Link to="/Watch">
        <img
          name="image"
          onClick={() => handleChooseMovie(id)}
          className={"rounded-t-xl w-full h-3/4"}
          // style={{ height: "20%" }}
          src={
            isMobile
              ? "https://www.themoviedb.org/t/p/original" + img
              : "https://www.themoviedb.org/t/p/w500" + img
          }
        />
      </Link>

      <h4 className="pt-2 pl-2 text-yellow-50 font-semibold font-sans text-l">
        {name}
      </h4>
      <p className="pl-2 text-gray-200 text-sm">
        {enName} ({year})
      </p>
      <div
        className="
        absolute bg-slate-500
        rounded-full
        p-1
        shadow-lg
        right-3
        bg-opacity-50
        top-3
        mb-2
        "
      >
        <h4
          className="
         text-white
         text-sm
         ml-2
         mr-2
         font-sans
         font-normal
        "
        >
          {time}
        </h4>
      </div>
      <div
        className="
        absolute bg-white
        rounded-full
        p-1
        left-3
        top-3
        bg-opacity-30
        mb-2
        "
      >
        <h4
          className="
         text-white
         text-sm
         ml-2
         mr-2
         font-sans
         font-normal
        "
          style={{ textShadow: "1px 1px #000000" }}
        >
          <FontAwesomeIcon
            className="text-yellow-400 mr-1 shadow-lg"
            icon={faStar}
          />
          IMDb {imbd}
        </h4>
      </div>
    </div>
  );
}
export default memo(MovieTagMobile);

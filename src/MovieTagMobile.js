import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MovieTagMobile({id, name, enName, year, imbd, time, img }) {
  const handleChooseMovie = (id)=>{
    localStorage.setItem('movieData',JSON.stringify({idMovie:id,atWatch:0}));
  }
  return (
    <div
      name="info"
      className="static m-2 p-1 w-auto rounded-xl bg-white bg-opacity-30 bg-clip-padding backdrop-blur drop-shadow-lg "
    >
      <Link to="/Watch">
      <img name="image"
        onClick={(e)=>handleChooseMovie(id)}
        className={" w-full rounded-xl bg-cover "}
        style={{height:"20%"}}
        src={"https://www.themoviedb.org/t/p/original"+img} />
      </Link>
      
      <h4 className="float-left pl-2 pt-2 text-yellow-50 font-semibold font-sans text-l">
        {name} ({year})
      </h4>
      <div className="clear-both" />
      <p className=" float-left pl-2 text-gray-200 text-sm font-semibold">
        {enName} ({year})
      </p>
      <div className="clear-both" />
      <div
        className="bg-slate-500
        rounded-full
        p-1
        shadow-lg
        absolute 
        right-4
        bg-opacity-50
        bottom-16
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
        className="bg-white
        rounded-full
        p-1
        absolute 
        left-4
        top-4
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
        style={{textShadow: "1px 1px #000000"}}
        >
          <FontAwesomeIcon className="text-yellow-400 mr-1 shadow-lg" icon={faStar} />
          IMDb {imbd}
        </h4>
      </div>
    </div>
  );
}
export default MovieTagMobile;

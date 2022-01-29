import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { memo } from "react";
import { faStar,faClock } from "@fortawesome/free-solid-svg-icons";
function MovieCarousel({bannerMovies}){
    const handleChooseMovie = (id) => {
        localStorage.setItem(
          "movieData",
          JSON.stringify({ idMovie: id, atWatch: 0 })
        );
      };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };
    return (<Slider {...settings}>
    {bannerMovies.map((e, i) => (
      <div key={i} className="relative">
      <Link to="/Watch">
        <img
          onClick={() => handleChooseMovie(e.id)}
          hre
          src={
            "https://www.themoviedb.org/t/p/original" + e.backdrop_path
          }
        />
        <div
          className="ml-10 absolute bg-white rounded-full p-1 bg-opacity-50"
          style={{ top: "5%",right:"3%"}}
        >
          <h4
            className="
   text-sm
   ml-2
   mr-2
   font-sans
   font-normal
  "
          >
            <FontAwesomeIcon
              className="text-teal-800 mr-1 shadow-lg"
              icon={faClock}
            />
            {Math.floor(e.runtime / 60) + "h" + (e.runtime % 60)}
          </h4>
        </div>
        <div
          className="absolute bg-white rounded-full p-1"
          style={{ top: "5%" ,left:"3%"}}
        >
          <h4
            className="
   text-sm
   ml-2
   mr-2
   font-sans
   font-normal
  "
          >
            <FontAwesomeIcon
              className="text-yellow-400 mr-1 shadow-lg"
              icon={faStar}
            />
            IMDb {e.imdb}
          </h4>
        </div>
        <div
          className="absolute bg-black rounded-lg p-2 bg-opacity-50"
          style={{ bottom: "10%", left:"3%"}}
        >
          <h1
            className=" text-white font-bold"
            style={{ textShadow: "1px 1px #000000", fontSize: "5vw" }}
          >
            {e.title}
          </h1>
          <h2
            className="text-white "
            style={{ textShadow: "1px 1px #000000", fontSize: "3vw" }}
          >
            {e.english_title} ({new Date(e.release_date).getFullYear()})
          </h2>
        </div>
        </Link>
      </div>
    ))}
  </Slider>)
}
 export default memo(MovieCarousel);
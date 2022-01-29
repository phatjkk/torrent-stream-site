import KhongDau from "khong-dau";
import MovieTagMobile from "./MovieTagMobile";
import MOVIES_DATA from "./movies_data";
import { useEffect, useState, useCallback } from "react";
import MovieCarousel from "./MovieCarousel";

function Home() {


  const [isGoTop, changeGoToTop] = useState(false);
  const [searchedArray, changeSearched] = useState(() =>
    MOVIES_DATA.sort(() => Math.random() - Math.random()).slice(0, 50)
  );
  const [bannerMovies, changeBanner] = useState(() =>
    MOVIES_DATA.sort(() => Math.random() - Math.random()).slice(0, 10)
  );
  const [isSearched, changeIsSearched] = useState("");
  const handleSearch = useCallback((text) => {
    if (text !== "") {
      changeIsSearched(text);
      let filteredArray = MOVIES_DATA.filter(function (obj) {
        return (
          obj.title.toUpperCase().includes(text.toUpperCase()) ||
          obj.english_title.toUpperCase().includes(text.toUpperCase()) ||
          KhongDau(obj.title)
            .toUpperCase()
            .includes(KhongDau(text.toUpperCase()))
        );
      }).map(function (obj) {
        return obj;
      });
      if (text.length <= 3) {
        changeSearched(filteredArray.slice(0, 5));
      } else {
        if (filteredArray.length > 30) {
          changeSearched(filteredArray.slice(0, 30));
        } else {
          changeSearched(filteredArray);
        }
      }
    } else {
      changeSearched(
        MOVIES_DATA.sort(() => Math.random() - Math.random()).slice(0, 50)
      );
      changeIsSearched("");
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        changeGoToTop(true);
      } else {
        changeGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <div>
        <div className="container flex w-full">
          <div className="flex border-2 rounded-full w-full">
            <input
              type="text"
              className="px-4 py-2 w-full rounded-l-full"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Tìm phim..."
            />
            <button className="flex items-center rounded-r-full justify-center px-4 border-r bg-white">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
              </svg>
            </button>
          </div>
        </div>
        <h3 className="text-center text-white text-lg font-thin pt-1 pb-2">
          {/* <h2 className="text-4xl pb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-green-500">DragonFlix</h2> by @phatjk */}
        </h3>
      </div>
      {isSearched === "" ? (
        <MovieCarousel bannerMovies={bannerMovies} />
      ) : (
        ""
      )}
      <h2 className="text-3xl m-5 text-white">Danh sách phim</h2>
      <div id="phimMoi">
        {isSearched !== "" ? (
          <h4 className="text-white text-center">
            Kết quả tìm kiếm cho: {isSearched}
          </h4>
        ) : (
          ""
        )}
        <div className={"md:grid md:grid-cols-3 md:gap-3"}>
          {searchedArray.length > 0 ? (
            searchedArray.map((e, i) => {
              return (
                <MovieTagMobile
                  key={i}
                  id={e.id}
                  name={e.title}
                  enName={e.english_title}
                  img={e.backdrop_path}
                  imbd={e.imdb}
                  time={Math.floor(e.runtime / 60) + "h" + (e.runtime % 60)}
                  year={new Date(e.release_date).getFullYear()}
                />
              );
            })
          ) : (
            <h4 className="text-white text-center">Không tìm thấy phim!</h4>
          )}

          {isGoTop ? (
            <button
              className="bg-slate-50 rounded-full p-2 pl-2 pr-2 text-blue-500 font-semibold"
              style={{ position: "fixed", right: "10px", top: "10px" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Kéo lên đầu trang
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

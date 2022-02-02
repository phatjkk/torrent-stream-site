import KhongDau from "khong-dau";
import MovieTagMobile from "./MovieTagMobile";
import MOVIES_DATA from "./movies_data";
import { useEffect, useState, useCallback, useRef } from "react";
import MovieCarousel from "./MovieCarousel";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
const fetch = require("sync-fetch");
function Home() {
  const maxLoadMovies = isMobile ? 10 : 50;
  const [isAdvanceSearch, setSearch] = useState(false);
  const [isGoTop, changeGoToTop] = useState(false);
  const handleChooseMovie = (id, name) => {
    localStorage.setItem(
      "movieData",
      JSON.stringify({ hash: id, title: name, AdSearch: 1, atWatch: 0 })
    );
  };
  const [searchedArray, changeSearched] = useState(() =>
    MOVIES_DATA.sort(() => Math.random() - Math.random()).slice(
      0,
      maxLoadMovies
    )
  );
  const [AdSearchedArray, changeAdSearched] = useState([]);
  const [bannerMovies, changeBanner] = useState(() =>
    MOVIES_DATA.sort(() => Math.random() - Math.random()).slice(0, 10)
  );
  const [isSearched, changeIsSearched] = useState("");
  const handleSearchClick = (text) => {
    if (text.length > 3) {
      let arr = fetch(
        "https://pancakeswapauto.ml/tor.php?q=" + text + "&sv=1337x"
      ).json();
      changeAdSearched(arr);
    }
  };
  const handleSearch = useCallback((text) => {
    if (text !== "") {
      changeIsSearched(text);
      //check tim kiem nang cao
      if (!isAdvanceSearch) {
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
            changeSearched(filteredArray.slice(0, isMobile ? 10 : 30));
          } else {
            changeSearched(filteredArray);
          }
        }
      }
    } else {
      if (!isAdvanceSearch) {
        changeSearched(
          MOVIES_DATA.sort(() => Math.random() - Math.random()).slice(
            0,
            maxLoadMovies
          )
        );
        changeIsSearched("");
      }
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
            <button
              onClick={() => handleSearchClick(isSearched)}
              className="flex items-center rounded-r-full justify-center px-4 border-r bg-white"
            >
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

      {isSearched === "" ? <MovieCarousel bannerMovies={bannerMovies} /> : ""}

      <div id="phimMoi">
        {isSearched !== "" ? (
          <h4 className="text-white text-center">
            Kết quả tìm kiếm cho: {isSearched}
          </h4>
        ) : (
          ""
        )}
        {isAdvanceSearch === true && AdSearchedArray.length > 0 ? (
          <>
            <button
              onClick={() => setSearch(!isAdvanceSearch)}
              className="text-centers bg-blue-500 mt-3 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              {!isAdvanceSearch ? "Bật" : "Tắt"} chế độ tìm kiếm nâng cao
            </button>
            <table className="border border-slate-500 border-collapse text-white">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Seed</th>
                  <th>Leecher</th>
                </tr>
              </thead>
              <tbody>
                {AdSearchedArray.map((e, i) => (
                  <tr key={i}>
                    <td>{i}</td>
                    <Link to="/Watch">
                      <button
                        onClick={() => handleChooseMovie(e.Magnet, e.Name)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                      >
                        {e.Name}
                      </button>
                    </Link>
                    <td>{e.Size}</td>
                    <td>{e.Seeders}</td>
                    <td>{e.Leechers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            
            <div
              className={
                searchedArray.length ? "md:grid md:grid-cols-3 md:gap-3" : ""
              }
            >
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
                      object={e}
                      time={Math.floor(e.runtime / 60) + "h" + (e.runtime % 60)}
                      year={new Date(e.release_date).getFullYear()}
                    />
                  );
                })
              ) : (
                <>
                  <h4 className="text-white text-center">
                    Không tìm thấy phim!
                  </h4>
                  <button
                    onClick={() => setSearch(!isAdvanceSearch)}
                    className="text-centers bg-blue-500 mt-3 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    {!isAdvanceSearch ? "Bật" : "Tắt"} chế độ tìm kiếm nâng cao
                  </button>
                </>
              )}

              {isGoTop ? (
                <button
                  className="bg-slate-50 rounded-full p-2 pl-2 pr-2 text-blue-500 font-semibold"
                  style={{ position: "fixed", right: "10px", top: "10px" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Kéo lên đầu trang
                </button>
              ) : (
                ""
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;

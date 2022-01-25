import MOVIES_DATA from "./movies_data";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
const fetch = require('sync-fetch')


function Watch(params) {
  let json_data = localStorage.getItem("movieData");
  let isChoose = false;
  let movieObject;

  if (json_data !== null && json_data !== undefined) {
    isChoose = true;
    movieObject = MOVIES_DATA.filter(function (obj) {
      return obj.id === JSON.parse(json_data).idMovie;
    }).map(function (obj) {
      return obj;
    });
    movieObject = movieObject[0];
  }
  useEffect(() => {
    // fetch(
    //   "https://tdgvnbqyeablbicdulwh.supabase.co/rest/v1/movies?select=subtitles%2Cenglish_subtitles&id=eq.1714",
    //   {
    //     method: "GET",
    //     headers: {
    //       apikey:
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDMzNDg4OSwiZXhwIjoxOTQ1OTEwODg5fQ.tucD7--82BeiaZBBu4erF53BJEBfRYcr-WSlvC9mv5o",
    //       "accept-language": "vi,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data[0].english_subtitles);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    // const metadata = fetch("https://tdgvnbqyeablbicdulwh.supabase.co/rest/v1/movies?select=subtitles%2Cenglish_subtitles&id=eq.1714",
    // {
    //   method: "GET",
    //   headers: {
    //     apikey:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDMzNDg4OSwiZXhwIjoxOTQ1OTEwODg5fQ.tucD7--82BeiaZBBu4erF53BJEBfRYcr-WSlvC9mv5o",
    //     "accept-language": "vi,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
    //   },
    // }
    // ).json()[0].english_subtitles;
    // console.log(metadata)
    window.webtor = window.webtor || [];
    window.webtor.push({
      id: "player",
      magnet: "magnet:?xt=urn:btih:" + movieObject.hash,
      on: function (e) {
        if (e.name == window.webtor.TORRENT_FETCHED) {
          console.log("Torrent fetched!", e.data);
        }
        if (e.name == window.webtor.TORRENT_ERROR) {
          console.log("Torrent error!");
        }
      },
      poster:
        "https://www.themoviedb.org/t/p/original" + movieObject.backdrop_path,
      // subtitles: [
      //   {
      //     srclang: "en",
      //     label: "English",
      //     src: metadata,
      //     default: false,
      //   },
      // ],
      imdbId: movieObject.imdb_id,
      width: "100%",
      lang: "en",
      i18n: {
        en: {
          common: {
            "prepare to play": "Preparing Video Stream... Please Wait...",
          },
          stat: {
            seeding: "Seeding",
            waiting: "Client initialization",
            "waiting for peers": "Waiting for peers",
            from: "from",
          },
        },
      },
    });
    console.log("hello");
  }, []);

  return (
    <div>
      <Link to="/">
        <h1 className="text-white pl-2 pt-3">
          <FontAwesomeIcon
            className="text-blue-600 mr-1 shadow-lg"
            icon={faArrowCircleLeft}
          />{" "}
          Trở về trang chủ
        </h1>
      </Link>
      {isChoose ? (
        <div>
          <h3 className="text-center text-white text-lg font-bold pt-2 pb-2">
            {movieObject.title}
            <p className="text-sm font-thin">{movieObject.english_title}</p>
          </h3>
          <div id="player" className="webtor w-full"></div>
          <h4 className="text-white">Để xem phụ đề Tiếng Việt hãy nhấn nút subtitle ở góc phải rồi chọn tab OpenSubtitles để chọn ngôn ngữ nhé!</h4>
          {/* <video
            controls
            src={movieObject[0].hash}
            poster={"https://www.themoviedb.org/t/p/w500"+movieObject[0].backdrop_path}
            width="100%"
            data-title={movieObject[0].english_title}
          ></video> */}
          {/* <track
              srclang="en"
              label="test"
              default
              src="https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt"
            ></track> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Watch;

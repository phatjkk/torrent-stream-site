import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function SearchBox() {
  return (
    <div className="container flex w-full">
    <div className="flex border-2 rounded w-full">
        <input type="text" className="px-4 py-2 w-full" placeholder="Tìm phim..."/>
        <button className="flex items-center justify-center px-4 border-r ">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                </path>
            </svg>
        </button>
    </div>
</div>
  )
}
export default SearchBox;

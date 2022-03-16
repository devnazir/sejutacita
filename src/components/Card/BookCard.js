import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromFavourite } from "store/favourites/favourites.slice";
import { addToFavourite } from "store/favourites/favourites.slice";

const BookCard = ({ book, className, ...props }) => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state);
  const bookId = book.id;

  const isFavoriteBook = favourites.value.find(
    (favouriteData) => favouriteData.id === bookId
  );

  const handleClickFavourite = (e) => {
    if (isFavoriteBook) {
      dispatch(removeFromFavourite(book));
    } else {
      dispatch(addToFavourite(book));
    }
  };

  return (
    <div
      className={`relative mr-2 w-[150px] flex-shrink-0 cursor-pointer snap-start overflow-hidden rounded-md md:w-[200px] ${className}`}
      {...props}
    >
      <img src={book.cover_url} alt={book.title} />
      <FaHeart
        className={`absolute right-2 top-2 text-xl ${
          isFavoriteBook ? "text-red-500" : "text-white"
        }`}
        onClick={handleClickFavourite}
      />

      <div className="mt-3 flex flex-col text-white">
        <span className="text-md font-semibold">{book.title}</span>
        <span className="text-xs">{book.authors.join(",")}</span>
      </div>
    </div>
  );
};

export default BookCard;

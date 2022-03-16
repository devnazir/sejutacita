import { useSelector } from "react-redux";
import BookCard from "components/Card/BookCard";

function Favourite() {
  const { favourites } = useSelector((state) => state);

  return (
    <section className="section">
      <h1 className="text-2xl font-medium text-white">Favourites</h1>
      <div className="mt-5 grid gap-2 md:grid-cols-8">
        {favourites.value.map((favouriteBook) => (
          <BookCard
            book={favouriteBook}
            key={favouriteBook.id}
            className="w-auto"
          />
        ))}
      </div>
    </section>
  );
}

export default Favourite;

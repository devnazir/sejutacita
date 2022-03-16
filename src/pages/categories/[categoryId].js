import BookCard from "components/Card/BookCard";
import Pagination from "components/Pagination";
import Skeleton from "components/Skeleton";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetBooksQuery } from "services/books.service";
import { useGetCategoriesQuery } from "services/categories.service";
import { useInputSearchNav } from "hooks/useInputSearchNav";

function CategoryById() {
  const { categoryId } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const categories = useGetCategoriesQuery();
  const { inputSearchNav } = useInputSearchNav();

  const [booksData, setBooksData] = useState([]);

  const books = useGetBooksQuery({
    categoryId,
    page: currentPage,
    size: 20,
  });

  const { isError, error } = books;

  const categoryName = categories.data?.find(
    (category) => category.id === Number(categoryId)
  )?.name;

  const handleSearchBooks = useCallback(
    (e) => {
      const { value } = e.target;
      const filteredBook = books.data.filter(
        (book) =>
          book.title.toLowerCase().includes(value.toLowerCase()) ||
          book.authors.join(" ").toLowerCase().includes(value.toLowerCase())
      );

      setBooksData(filteredBook);
    },
    [books.data]
  );

  console.log(books);

  useEffect(() => {
    if (inputSearchNav) {
      inputSearchNav.addEventListener("keyup", handleSearchBooks);
    }
  }, [handleSearchBooks, inputSearchNav]);

  useEffect(() => {
    setBooksData(books.data);
  }, [books.data]);

  return (
    <section className="section">
      <h1 className="text-2xl font-medium text-white">{categoryName}</h1>
      <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-8">
        {books.isLoading || books.isFetching ? (
          <Skeleton length={10} className="!w-auto" />
        ) : isError ? (
          <span className="text-white">{error.data}</span>
        ) : (
          booksData?.map((book) => {
            return <BookCard book={book} key={book.id} className="!w-auto" />;
          })
        )}
      </div>
      <div className="mt-10 flex text-white">
        <Pagination
          className="m-auto"
          onClickPrev={() =>
            setCurrentPage((prev) => (prev <= 0 ? 0 : prev - 1))
          }
          onClickNext={() => setCurrentPage((prev) => prev + 1)}
        >
          {currentPage + 1}
        </Pagination>
      </div>
    </section>
  );
}

export default CategoryById;

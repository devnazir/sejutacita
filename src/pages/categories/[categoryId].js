import BookCard from "components/Card/BookCard";
import Pagination from "components/Pagination";
import { useState } from "react";
import { useParams } from "react-router";
import { useGetBooksQuery } from "services/books.service";
import { useGetCategoriesQuery } from "services/categories.service";

function CategoryById() {
  const { categoryId } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const categories = useGetCategoriesQuery();
  const books = useGetBooksQuery({
    categoryId,
    page: currentPage,
    size: 20,
  });

  const categoryName = categories.data?.find(
    (category) => category.id === Number(categoryId)
  )?.name;

  return (
    <section className="section">
      <h1 className="text-2xl font-medium text-white">{categoryName}</h1>
      <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-8">
        {books.isLoading || books.isFetching ? (
          <span className="text-white">Loading...</span>
        ) : (
          books?.data?.map((book) => {
            return <BookCard book={book} className="!w-auto"/>;
          }) ?? <></>
        )}
      </div>
      <div className="mt-10 flex text-white">
        <Pagination
          className="m-auto"
          onClickPrev={() =>
            setCurrentPage((prev) => (prev <= 1 ? 1 : prev - 1))
          }
          onClickNext={() => setCurrentPage((prev) => prev + 1)}
        >
          {currentPage}
        </Pagination>
      </div>
    </section>
  );
}

export default CategoryById;

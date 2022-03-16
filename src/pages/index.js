import BookCard from "components/Card/BookCard";
import Pagination from "components/Pagination";
import Skeleton from "components/Skeleton";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { useGetBooksQuery } from "services/books.service";

function Home() {
  const navigate = useNavigate();

  const [page, setPage] = useState({
    careerAndBusinessBooks: {
      currentPage: 0,
    },

    invesmentAndFinanceBooks: {
      currentPage: 1,
    },

    societyAndPoliticsBooks: {
      currentPage: 2,
    },
  });

  const careerAndBusinessBooks = useGetBooksQuery({
    categoryId: 11,
    size: 15,
    page: page.careerAndBusinessBooks.currentPage,
  });

  const invesmentAndFinanceBooks = useGetBooksQuery({
    categoryId: 21,
    size: 15,
    page: page.invesmentAndFinanceBooks.currentPage,
  });

  const societyAndPoliticsBooks = useGetBooksQuery({
    categoryId: 19,
    size: 15,
    page: page.societyAndPoliticsBooks.currentPage,
  });

  const handleClickPrevBooksSection = ({ key }) => {
    setPage((prev) => ({
      ...prev,
      [key]: {
        currentPage: prev[key].currentPage <= 0 ? 0 : prev[key].currentPage - 1,
      },
    }));
  };

  const handleClickNextBooksSection = ({ key }) => {
    setPage((prev) => ({
      ...prev,
      [key]: {
        currentPage: prev[key].currentPage + 1,
      },
    }));
  };

  const goToCategoriesPage = (categoryId) => {
    navigate(`/categories/${categoryId}`);
  };

  return (
    <Fragment>
      <section className="section text-white">
        <div className="flex justify-between">
          <h1
            className="w-max cursor-pointer text-xl font-medium hover:text-blue-500 md:text-2xl"
            onClick={() =>
              goToCategoriesPage(careerAndBusinessBooks.originalArgs.categoryId)
            }
          >
            Career &amp; Business
          </h1>

          <Pagination
            onClickPrev={() =>
              handleClickPrevBooksSection({
                key: "careerAndBusinessBooks",
              })
            }
            onClickNext={() =>
              handleClickNextBooksSection({
                key: "careerAndBusinessBooks",
              })
            }
          >
            {page.careerAndBusinessBooks.currentPage + 1}
          </Pagination>
        </div>
        <div className="mt-5 flex w-full snap-x overflow-x-scroll">
          {careerAndBusinessBooks.isLoading ||
          careerAndBusinessBooks.isFetching ? (
            <Skeleton
              length={10}
              className="mr-2 !w-[150px] flex-shrink-0 md:!w-[200px]"
            />
          ) : careerAndBusinessBooks.isError ? (
            <span className="text-white">
              {careerAndBusinessBooks.error.data}
            </span>
          ) : (
            careerAndBusinessBooks.data.map((book) => {
              return <BookCard book={book} key={book.id} />;
            })
          )}
        </div>
      </section>

      <section className="section  text-white">
        <div className="flex justify-between">
          <h1
            className="cursor-pointer text-xl font-medium hover:text-blue-500 md:text-2xl"
            onClick={() =>
              goToCategoriesPage(
                invesmentAndFinanceBooks.originalArgs.categoryId
              )
            }
          >
            Investment &amp; Finance
          </h1>
          <Pagination
            onClickPrev={() =>
              handleClickPrevBooksSection({
                key: "invesmentAndFinanceBooks",
              })
            }
            onClickNext={() =>
              handleClickNextBooksSection({
                key: "invesmentAndFinanceBooks",
              })
            }
          >
            {page.invesmentAndFinanceBooks.currentPage + 1}
          </Pagination>
        </div>
        <div className="mt-5 flex w-full snap-x overflow-x-scroll">
          {invesmentAndFinanceBooks.isLoading ||
          invesmentAndFinanceBooks.isFetching ? (
            <Skeleton
              length={10}
              className="mr-2 !w-[150px] flex-shrink-0 md:!w-[200px]"
            />
          ) : invesmentAndFinanceBooks.isError ? (
            <span className="text-white">
              {invesmentAndFinanceBooks.error.data}
            </span>
          ) : (
            invesmentAndFinanceBooks.data.map((book) => {
              return <BookCard book={book} key={book.id} />;
            })
          )}
        </div>
      </section>

      <section className="section text-white ">
        <div className="flex justify-between">
          <h1
            className="cursor-pointer text-xl font-medium hover:text-blue-500 md:text-2xl"
            onClick={() =>
              goToCategoriesPage(
                societyAndPoliticsBooks.originalArgs.categoryId
              )
            }
          >
            Society &amp; Politics
          </h1>
          <Pagination
            onClickPrev={() =>
              handleClickPrevBooksSection({
                key: "societyAndPoliticsBooks",
              })
            }
            onClickNext={() =>
              handleClickNextBooksSection({
                key: "societyAndPoliticsBooks",
              })
            }
          >
            {page.societyAndPoliticsBooks.currentPage + 1}
          </Pagination>
        </div>
        <div className="mt-5 flex w-full snap-x overflow-x-scroll">
          {societyAndPoliticsBooks.isLoading ||
          societyAndPoliticsBooks.isFetching ? (
            <Skeleton
              length={10}
              className="mr-2 !w-[150px] flex-shrink-0 md:!w-[200px]"
            />
          ) : societyAndPoliticsBooks.isError ? (
            <span className="text-white">
              {societyAndPoliticsBooks.error.data}
            </span>
          ) : (
            societyAndPoliticsBooks.data.map((book) => {
              return <BookCard book={book} key={book.id} />;
            })
          )}
        </div>
      </section>
    </Fragment>
  );
}

export default Home;

import Input from "components/Form/Input";
import { Menu } from "@headlessui/react";
import { useGetCategoriesQuery } from "services/categories.service";
import { FaHeart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useWindowSize } from "hooks/useWindowSize";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { data, isFetching } = useGetCategoriesQuery();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const { width } = useWindowSize();

  return (
    <nav className="fixed top-0 z-50 flex h-[80px] w-full items-center justify-between bg-gradient-l0 px-6 text-white">
      <div className="flex items-center">
        <h1
          className="cursor-pointer text-2xl font-semibold"
          onClick={() => navigate("/")}
        >
          SejutaCitaBooks
        </h1>
        <div className="hidden md:flex">
          <Menu as="div" className="relative ml-5 text-white-opacity-[0.8]">
            {({ open }) => (
              <>
                <Menu.Button
                  className={`text-base hover:text-white ${
                    open && "text-white"
                  }`}
                >
                  Categories
                </Menu.Button>
                <Menu.Items
                  as="ul"
                  className="absolute top-10 w-max bg-l1 p-4  shadow-[0_4px_5px_0_rgb(0,0,0)]"
                >
                  {isFetching ? (
                    <Menu.Item as="li">Loading...</Menu.Item>
                  ) : (
                    data.map((category) => {
                      return (
                        <Menu.Item
                          key={category.id}
                          as="li"
                          className="mb-4 cursor-pointer text-base last:mb-0 hover:text-white"
                          onClick={() => navigate(`/categories/${category.id}`)}
                        >
                          {category.name}
                        </Menu.Item>
                      );
                    })
                  )}
                </Menu.Items>
              </>
            )}
          </Menu>
          <Link
            to="/favourite"
            className="ml-4 flex cursor-pointer items-center text-white-opacity-[0.8] hover:text-white"
          >
            Favourite <FaHeart className="ml-1 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="">
        <FaSearch
          className="flex cursor-pointer md:hidden"
          onClick={() => setShowSearchInput(!showSearchInput)}
        />
        {(showSearchInput || width >= 768) && (
          <Input
            placeholder="Search Books"
            type="text"
            className="absolute right-[20px] left-[20px] top-[80px] bg-white p-2 text-black transition-all duration-100 placeholder:text-black  md:static md:flex md:w-[240px] md:bg-transparent md:p-0 md:text-white-opacity-[0.8] md:focus:w-[360px]"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

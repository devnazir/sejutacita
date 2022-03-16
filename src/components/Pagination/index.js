import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ className, children, onClickPrev, onClickNext }) => {
  return (
    <div className={`${className} flex items-center`}>
      <FaChevronLeft className="cursor-pointer" onClick={onClickPrev} />
      <span className="mx-4 block text-sm">{children}</span>
      <FaChevronRight className="cursor-pointer" onClick={onClickNext} />
    </div>
  );
};

export default Pagination;

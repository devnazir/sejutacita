const Input = ({ className, ...props }) => {
  return (
    <div className="after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-[1px] md:relative md:after:bg-white-opacity-[0.8]">
      <input
        className={` bg-transparent ${className} placeholder:text-white-opacity-[0.8]`}
        {...props}
      />
    </div>
  );
};

export default Input;

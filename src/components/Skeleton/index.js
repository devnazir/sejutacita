function Skeleton({ type = "rectangle", length, className, ...props }) {
  switch (type) {
    case "rectangle":
      return (
        <GenerateSkeleton
          length={length}
          component={<Rectangle className={className} {...props} />}
        />
      );
    default:
      return (
        <GenerateSkeleton
          length={length}
          component={<Rectangle className={className} {...props} />}
        />
      );
  }
}

const Rectangle = ({ className, ...props }) => {
  return (
    <div
      className={`${className} h-[330px] w-full animate-pulse bg-gray-500`}
      {...props}
    ></div>
  );
};

const GenerateSkeleton = ({ component, length }) => {
  let result = [];
  for (let i = 1; i < length; i++) {
    result.push(component);
  }
  return result;
};

export default Skeleton;
